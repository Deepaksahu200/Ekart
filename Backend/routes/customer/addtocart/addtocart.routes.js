const express = require('express');
const addtocart_routes = express.Router()

const validate = require('../../../validation/validation')
const { addtocart, addtocart_post, addtocart_update, addtocart_destroy } = require('../../../controller/customer/addtocart/addtocart.controller');

// Routes of shop-registration:::::::::::::::::::
addtocart_routes.get('/addtocart', addtocart, validate)
addtocart_routes.post('/addtocart-post', validate, addtocart_post)
addtocart_routes.patch('/addtocart/:Cartid', addtocart_update, validate)
addtocart_routes.delete('/addtocart/:Cartid', addtocart, validate)


module.exports = addtocart_routes;