const express = require('express');
const specification_routes = express.Router()


const { specification, specification_post, specification_update, specification_destroy } = require('../../../controller/shop/product_specification/specification.controller')


// Routes of shop-registration:::::::::::::::::::
specification_routes.get('/specification', specification)
specification_routes.post("/specification-post", specification_post)
specification_routes.patch("/specification/:cid", specification_update)
specification_routes.delete("/specification/:cid", specification_destroy)


module.exports = specification_routes;