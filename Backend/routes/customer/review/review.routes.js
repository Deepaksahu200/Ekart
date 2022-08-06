const express = require('express');

const review_routes = express.Router();

const { review, review_post, review_update, review_destroy } = require('../../../controller/customer/reveiw/reveiw.controller')

review_routes.get('/review', review)
review_routes.post("/review-post", review_post)
review_routes.patch("/review/:cid", review_update)
review_routes.delete("/review/:cid", review_destroy)


module.exports = review_routes;