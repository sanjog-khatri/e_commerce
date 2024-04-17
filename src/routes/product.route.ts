/* eslint-disable @typescript-eslint/no-unsafe-argument */
import express from 'express'
// import { getAll } from '../controllers/todo.controller'
import * as productController from '../controllers/product.controller'
import { validate } from '../utils/validate'

import orderItemRouter from '../routes/orderItem.route'

import { authenticateToken } from '../middlewares/authentication.middleware'
import { createProductDto, removeProductDto, updateProductDto } from '../validators/create-product.validator'
import { is_supplier } from '../middlewares/authentication.middleware'
const route = express.Router()

route.use ('/:id/orderItems', orderItemRouter)

route.get('/', authenticateToken,productController.getAll)

route.get('/:id', authenticateToken, productController.findOne)

route.post('/', validate(createProductDto), authenticateToken,is_supplier,  productController.create)

route.delete('/:id', validate(removeProductDto),authenticateToken, is_supplier, productController.remove)

route.patch('/:id',validate(updateProductDto), authenticateToken, is_supplier, productController.update)


export default route;