import express from 'express'

import productRouter from './routes/product.route'
import userRouter from './routes/user.route'
import orderRouter from './routes/order.route'
import orderItemRouter from './routes/orderItem.route'

import cors from 'cors'
import compression from 'compression'
import { genericErrorHandler } from './middlewares/errors.middleware'
const PORT = 4444
const app = express()

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 
}
))
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/orders',orderRouter)
app.use('/orderItems',orderItemRouter)



// app.use(compression())

app.listen(PORT, () => {
    
  console.log('Running on port', PORT);
})

app.use(genericErrorHandler)

export default app;