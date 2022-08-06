const express = require('express');
const shipping_routes = express.Router()


const { shipping, shipping_post, shipping_update, shipping_destroy } = require('../../controller/shipping/shipping.controller')

// Routes of shop-registration:::::::::::::::::::
shipping_routes.get('/shipping', shipping)
shipping_routes.post("/shipping-post", shipping_post)
shipping_routes.patch("/shipping/:offer_id", shipping_update)
shipping_routes.delete("/shipping/:offer_id", shipping_destroy)


module.exports = shipping_routes;