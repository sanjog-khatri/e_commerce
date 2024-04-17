import { NextFunction, Request, Response } from "express"
import * as orderItemServices from '../services/orderItem.service'
import HttpStatusCodes from "http-status-codes"


export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log((req as any).user)
        
        const data = await orderItemServices.getAll()
        res.json(data)
    } catch (error) {
        next(error)
    }
}


export const create = async (req: Request, res: Response, next: NextFunction) => {
  try{
    console.log(req.body, ' is request body')
    const productId = Number( req.params.id )
    const data = await orderItemServices.create(req.body, productId)
  res.status(HttpStatusCodes.CREATED).send(data)
} catch(error){
  next(error)
}
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const orderItems: any = req.body
  const id = Number(req.params.id)
  const data = await orderItemServices.update(id, orderItems)
  res.status(HttpStatusCodes.OK).send(data);
  } catch(error) {
    next(error)
  }
}


export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
  // @TODO: Handle errors
  const data = await orderItemServices.remove(Number(id))
  res.status(HttpStatusCodes.NO_CONTENT).send()
}catch(error){
  next(error)
}
}



// try {
//   const id = Number(req.params.id)
// console.log(id, ' request params ko id yo ho hai')
// const data = await orderItemServices.remove(id)
// res.status(HttpStatusCodes.GONE).send()
// } catch (error) {
// next(error)
// }

export const findOne =async (req: Request, res: Response, next: NextFunction) => {
  try {
      const  id  = Number(req.params.id);
      const data =  await orderItemServices.findOne(id);

      res.status(HttpStatusCodes.ACCEPTED).send(data);
  } catch (error: any) {
    next(error);
  }
  }


  // res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send(error.message);

  // if (!products) {
  //   res.status(HttpStatusCodes.NOT_FOUND).send('Todo not found');
  // } else {
  //   res.status(HttpStatusCodes.ACCEPTED).send(products);
  // }