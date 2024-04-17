/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as orderController from '../controllers/order.controller'
import { validate } from '../utils/validate'

import { authenticateToken } from '../middlewares/authentication.middleware'
import { createOrderDto, findOneOrderDto, getAllOrderDto, removeOrderDto, updateOrderDto } from '../validators/create-order.validator'
const route = express.Router()



route.get('/', validate(getAllOrderDto),authenticateToken, orderController.getAll)

route.get('/:id', validate(findOneOrderDto),authenticateToken, orderController.findOne)

route.post('/', validate(createOrderDto), authenticateToken,  orderController.create)

route.delete('/:id', validate(removeOrderDto),authenticateToken, orderController.remove)

route.patch('/:id',validate(updateOrderDto), authenticateToken, orderController.update)


export default route;