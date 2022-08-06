const express = require('express');
const categorysub_routes = express.Router()


const { categorysub, categorysub_post, categorysub_update, categorysub_destroy } = require('../../../controller/addmin/product_subcatagory/subcategory.controller')


// Routes of shop-registration:::::::::::::::::::
categorysub_routes.get('/categorysub', categorysub)
categorysub_routes.post("/categorysub-post", categorysub_post)
categorysub_routes.patch("/categorysub/:ccid", categorysub_update)
categorysub_routes.delete("/categorysub/:ccid", categorysub_destroy)


module.exports = categorysub_routes;