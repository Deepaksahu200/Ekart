const express = require('express');
const category_routes = express.Router()


const { category, category_post, category_update, category_destroy } = require('../../../controller/addmin/product_category/category.controller')


// Routes of shop-registration:::::::::::::::::::
category_routes.get('/category', category)
category_routes.post("/category-post", category_post)
category_routes.patch("/category/update/:cid", category_update)
category_routes.delete("/category/delete/:cid", category_destroy)


module.exports = category_routes;