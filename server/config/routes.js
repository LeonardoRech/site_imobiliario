const admin = require('./admin')
const multer = require('multer')
const upload = multer({
    storage: multer.diskStorage(
        {
            destination: function (req, file, cb) {
                cb(null, 'uploads/');
            },
            filename: function (req, file, cb) {
                cb(
                    null,
                    new Date().valueOf() + 
                    '_' +
                    file.originalname
                );
            }
        }
    ), 
})

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/images')
        .get(app.api.images.get)
        .post(upload.single('image'), app.api.images.save)

    app.route('/:idImovel/images')
        .get(app.api.images.getByImovel)

    app.route('/imoveis')
        .get(app.api.imovel.get)
        .post(upload.single('image'), app.api.imovel.save)
        .put(app.api.imovel.save)

    app.route('/imoveis/:id')
        .get(app.api.imovel.getById)
        .delete(app.api.imovel.remove)

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(admin(app.api.user.save))  

    app.route('/contacts')
        .post(app.api.contacts.save)
        .get(app.api.contacts.get)

    app.route('/contacts/:id')
        .put(app.api.contacts.save)
        .delete(app.api.contacts.remove)

}