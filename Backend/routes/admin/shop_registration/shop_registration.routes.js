const express = require('express');
const sr_routes = express.Router()


const { reg, post, update, destroy } = require('../../../controller/addmin/shop_registration/registration.controller')


// Routes of shop-registration:::::::::::::::::::
sr_routes.get('/shop-registration', reg)
sr_routes.post('/shop-post', post)
sr_routes.patch('/shop/:shopID', update)
sr_routes.delete('/shop/:shopID', destroy)


module.exports = sr_routes;