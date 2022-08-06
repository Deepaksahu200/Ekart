const express = require('express');
const customer_routes = express.Router()


const { customer_registration, customerreg_post, customerreg_update, customerreg_destroy } = require('../../../controller/customer/customerregistration/customer.registration.controller')

// Routes of shop-registration:::::::::::::::::::
customer_routes.get('/customer-registration', customer_registration)
customer_routes.post('/customer-post', customerreg_post)
customer_routes.patch('/customer/:mobile', customerreg_update)
customer_routes.delete('/customer/:mobile', customerreg_destroy)


module.exports = customer_routes;