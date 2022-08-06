const express = require('express');
const make_payment_routes = express.Router()


const { make_payment, make_payment_post, make_payment_update, make_paymentr_destroy } = require('../../../controller/customer/make_payment/make_payment.controller')

// Routes of shop-registration:::::::::::::::::::
make_payment_routes.get('/make_payment', make_payment)
make_payment_routes.post("/make_payment-post", make_payment_post)
make_payment_routes.patch("/make_payment/:offer_id", make_payment_update)
make_payment_routes.delete("/make_payment/:offer_id", make_paymentr_destroy)


module.exports = make_payment_routes;
