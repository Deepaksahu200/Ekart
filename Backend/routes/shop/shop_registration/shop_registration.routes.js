const express = require('express');
const of_routes = express.Router()


const { Offer, Offer_post, Offer_update, Offer_destroy } = require('../../../controller/addmin/offer/offer.controller')


// Routes of shop-registration:::::::::::::::::::
of_routes.get('/offer', Offer)
of_routes.post("/offer-post", Offer_post)
of_routes.patch("/offer/:offer_id", Offer_update)
of_routes.delete("/offer/:offer_id", Offer_destroy)


module.exports = of_routes;