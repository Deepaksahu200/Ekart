const express = require('express');
const addtowishlist_routes = express.Router()


const { addtowishlist, addtowishlist_post, addtowishlist_update, addtowishlist_destroy } = require('../../../controller/customer/addtowishlist/addtowishlist.controller')


// Routes of shop-registration:::::::::::::::::::
addtowishlist_routes.get('/addtowishlist', addtowishlist)
addtowishlist_routes.post("/addtowishlist-post", addtowishlist_post)
addtowishlist_routes.patch("/addtowishlist/:c_mobile", addtowishlist_update)
addtowishlist_routes.delete("/addtowishlist/:c_mobile", addtowishlist_destroy)


module.exports = addtowishlist_routes;