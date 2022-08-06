const express = require('express');
const user_routes = express.Router();

const {user_management ,user_management_post,user_management_update,user_management_destroy}= require('../../../controller/addmin/user_managament/user_managament.controller')

user_routes.get('/user_management',user_management);
user_routes.post('/user_management-post',user_management_post);
user_routes.put('/user_management/update/:user_id',user_management_update);
user_routes.delete('/user_management/dalete/:user_id',user_management_destroy);

module.exports = user_routes;