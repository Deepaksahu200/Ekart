const express = require('express');
const shops_routes = express.Router()


const { shops, shops_post, shops_update, shops_destroy } = require('../../../controller/login/shops/shops.controller')

// Routes of shop-registration:::::::::::::::::::
shops_routes.get('/shops', shops)
shops_routes.post("/shops-post", shops_post)
shops_routes.patch("/shops/:offer_id", shops_update)
shops_routes.delete("/shops/:offer_id", shops_destroy)


module.exports = shops_routes;
