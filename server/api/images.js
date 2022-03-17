module.exports = app => {
    const save = (req, res) => {
        const idImovel = req.body.idImovel
        const path = req.file.path

        app.db('images')
            .insert({
                idImovel,
                path
            })
            .then(_ => res.status(204).send({success: true, path}))
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {

        app.db({ i: 'images', m: 'imoveis'})
            .select('i.id', 'i.idImovel', 'm.name', {image: 'i.path'})
            .whereRaw('?? = ??', ['m.id', 'i.idImovel'])
            .then(images => res.json(images))
            .catch(err => res.status(500).send(err))
    }

    const getByImovel = (req, res) => {
        app.db('images')
            .where({ idImovel: req.params.idImovel })
            .then(images => {return res.json(images)})
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getByImovel }
}