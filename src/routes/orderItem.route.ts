/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as orderItemController from '../controllers/orderItem.controller'
import { validate } from '../utils/validate'
import orderRouter from '../routes/order.route'
import { authenticateToken } from '../middlewares/authentication.middleware'
import { createOrderDto, findOneOrderDto, getAllOrderDto, removeOrderDto, updateOrderDto } from '../validators/create-orderItem.validator'


const route = express.Router ({ mergeParams: true })

route.use('/:id/orders', orderRouter)

route.get('/', validate(getAllOrderDto),authenticateToken, orderItemController.getAll)

route.get('/:id', validate(findOneOrderDto),authenticateToken, orderItemController.findOne)

route.post('/', validate(createOrderDto), authenticateToken,  orderItemController.create)

route.delete('/:id', validate(removeOrderDto),authenticateToken, orderItemController.remove)

route.patch('/:id',validate(updateOrderDto), authenticateToken, orderItemController.update)


export default route;