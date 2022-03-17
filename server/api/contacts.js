module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = async (req, res) => {
        const contact = { ...req.body }
        if(req.params.id) contact.id = req.params.id

        try {
            existsOrError(contact.name, "Nome do Contato não Informado")
            existsOrError(contact.apto, "Localidade não informada")
            existsOrError(contact.number, "Número Para Contato Não Informado")
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(contact.id) {
            app.db('contacts')
                .update(contact)
                .where({ id: contact.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('contacts')
                .insert(contact)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('contacts')
            .select('id', 'name', 'apto', 'number')
            .then(contacts => res.json(contacts))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('contacts')
                .where({ id: req.params.id}).del()
                existsOrError(rowsDeleted, 'Usuário não foi encontrado.')
                res.status(204).send()
            } catch(msg) {
                res.status(500).send(msg)
            }
    }

    return { save, get, remove }
}