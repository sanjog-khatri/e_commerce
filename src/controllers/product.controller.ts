import { NextFunction, Request, Response } from "express"
import * as ProductServices from '../services/product.service'
import HttpStatusCodes from "http-status-codes"


export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log((req as any).user)
        
        const data = await ProductServices.getAll()
        res.json(data)
    } catch (error) {
        next(error)
    }
}


export const create = async (req: Request, res: Response, next: NextFunction) => {
  try{
    console.log(req.body, ' is request body')
    const data = await ProductServices.create(req.body, (req as any).user.userId)
  res.status(HttpStatusCodes.CREATED).send(data)
} catch(error){
  next(error)
}
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
  const products: any = req.body
  const id = Number(req.params.id)
  const data = await ProductServices.update(id, products)
  res.status(HttpStatusCodes.OK).send(data);
  } catch(error) {
    next(error)
  }
}


export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
  // @TODO: Handle errors
  const data = await ProductServices.remove(Number(id))
  res.status(HttpStatusCodes.NO_CONTENT).send()
}catch(error){
  next(error)
}
}



// try {
//   const id = Number(req.params.id)
// console.log(id, ' request params ko id yo ho hai')
// const data = await ProductServices.remove(id)
// res.status(HttpStatusCodes.GONE).send()
// } catch (error) {
// next(error)
// }

export const findOne =async (req: Request, res: Response, next: NextFunction) => {
  try {
      const  id  = Number(req.params.id);
      const data =  await ProductServices.findOne(id);

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