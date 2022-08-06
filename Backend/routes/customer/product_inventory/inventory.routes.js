const express = require('express');

const inventory_routes = express.Router();

const { inventory, inventory_post, inventory_update, inventory_destroy } = require('../../../controller/customer/product_inventroy/inventroy.controller');

inventory_routes.get('/inventory', inventory)
inventory_routes.post("/inventory-post", inventory_post)
inventory_routes.patch("/inventory/:pid", inventory_update)
inventory_routes.delete("/inventory/:pid", inventory_destroy)


module.exports = inventory_routes;