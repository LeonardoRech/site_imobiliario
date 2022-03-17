const multer = require('multer')

module.exports = app => {
    const upload = multer({ dest: '/uploads/'})
}