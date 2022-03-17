module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation


    const get = (req, res) => {
        app.db('teste')
            .select('id', 'name')
            .then(teste => res.json({ data: teste }))
            .catch(err => res.status(500).send(err))
    }

    const save = async (req, res) => {
        const name = req.body.name

        app.db('teste')
            .insert({
                name
            })
            .then(_ => res.status(204).send({success: true}))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {

        app.db({t: 'teste', i: 'images'})
            .where({ 't.id': req.params.id })
            .whereRaw('?? = ??', ['t.id', 'i.idTeste'])
            .then(imovel => {return res.json(imovel.map(teste => {
                return{
                    id: teste.id,
                    name: teste.name,
                    path: teste.path
                }
            }))})
            .catch(err => res.status(500).send(err))
    }


    return { get, save, getById }
}