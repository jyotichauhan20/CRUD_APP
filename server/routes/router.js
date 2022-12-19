const express = require('express')
const route = express.Router()

const services = require('../services/render')
const userController = require('../controller/userController')

/**
 * @description Root Route
 * @method GET /
 */

route.get('/', services.homeRoutes)

/**
 * @description add users
 * @method GET / add-user
 */

route.get('/add-user', services.add_user)

/**
 * @description update users
 * @method GET / update-user
 */

route.get('/update-user', services.update_user)

// API
route.post('/api/users',userController.create)
route.get('/api/users',userController.find)
route.put('/api/users/:id',userController.update)
route.delete('/api/users/:id',userController.delete)


module.exports = route