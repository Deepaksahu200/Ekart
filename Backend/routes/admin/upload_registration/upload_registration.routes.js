const express = require('express');
const uploadreg_routes = express.Router()


const { upload_registration, upload_registration_post, upload_registration_update, upload_registration_destroy } = require('../../../controller/addmin/upload_registation/upload_registrayion.controller')


// Routes of shop-registration:::::::::::::::::::
uploadreg_routes.get('/upload', upload_registration)
uploadreg_routes.post("/upload-post", upload_registration_post)
uploadreg_routes.patch("/upload/:shopID", upload_registration_update)
uploadreg_routes.delete("/upload/:shopID", upload_registration_destroy)


module.exports = uploadreg_routes;
