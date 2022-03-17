module.exports = app => {

    const save = (req, res) => {
        if(req.body.id){
            const imovel = {
                id: req.body.id,
                name: req.body.name,
                subtitle: req.body.subtitle,
                price: req.body.price,
                area: req.body.area,
                beedroms: req.body.beedroms,
                garage: req.body.garage,
                desc_apto: req.body.desc_apto,
                desc_edificio: req.body.desc_edificio,
                user: req.body.user,
                category: req.body.category,
                city: req.body.city,
                district: req.body.district,
                perfil: req.body.perfil,
                mobilia: req.body.mobilia,
                image: req.body.image
            }

            app.db('imoveis')
                .update(imovel)
                .where({ id: imovel.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            const imovelAdd = {
                name: req.body.name,
                subtitle: req.body.subtitle,
                price: req.body.price,
                area: req.body.area,
                beedroms: req.body.beedroms,
                garage: req.body.garage,
                desc_apto: req.body.desc_apto,
                desc_edificio: req.body.desc_edificio,
                user: req.body.user,
                category: req.body.category,
                city: req.body.city,
                district: req.body.district,
                perfil: req.body.perfil,
                mobilia: req.body.mobilia,
                image: req.file.path
            }

            app.db('imoveis')
                .insert(imovelAdd)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('imoveis')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Imovel não encontrado.')
            
            res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    const limit = 10
    const get = async(req, res) => {
        const page = req.query.page || 1

        const result = await app.db('imoveis').count('id').first()
        const count = parseInt(result.count)

        app.db('imoveis')
            .select('id', 'name', 'subtitle', 'price', 'image', 'area', 'beedroms', 'garage', 'desc_apto', 'desc_edificio', 'user', 'category', 'city', 'district', 'perfil', 'mobilia')
            .limit(limit).offset(page * limit - limit)
            .then(imovel => res.json({ data: imovel, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('imoveis')
            .where({ id: req.params.id })
            .first()
            .then(imovel => {
                imovel.desc_apto = imovel.desc_apto.toString()
                imovel.desc_edificio = imovel.desc_edificio.toString()
                return res.json(imovel)
            })
            .catch(err => res.status(500).send(err))
    }

    return { save, remove, get, getById}
}