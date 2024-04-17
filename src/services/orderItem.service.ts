import { PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom"
import { createOrderDtoBody } from "../validators/create-orderItem.validator"
import { z } from "zod"

const prisma = new PrismaClient()

export const getAll = async () => {
  try { 
    
  return await prisma.orderItem.findMany( )
    }
    // return await prisma.orderItem.findMany()
    
  catch (error: any) {
    
    console.log( error );

    if ( error.code === 'P2025') {
        throw Boom.notFound(' nothing to show my dear ')
    } else {
      throw (error)
    }
  }
}
  
  
  
  
  export const create = async (body: z.infer<typeof createOrderDtoBody>, orderId: number, productId: number) => {
    const { quantity, price, totalPrice} = body

      let createdOrderItems: any;
    
       await prisma.$transaction( async ( tx ) => {

        createdOrderItems = await tx.orderItem.create ({
          data: {
        
            quantity,
            price,
            totalPrice,
            orderId: orderId,
            productId: productId
            
    
          },
        })

    })

    return createdOrderItems
    // return 'create garne api'
  // } catch( error: any) {
  //   console.log(error);

  //   if ( error.code === 'P2003') {
  //     throw Boom.notFound('cannot be created')
  //   } else {
  //     throw(error)
  //   }
  // }
}
   
  export const update = async (id: number, body: any) => {
    const { quantity, price, totalPrice } = body
     try {

      return await prisma.orderItem.update({
        data:{
            
          quantity,
          price,
          totalPrice
            
            
        },
        where:{
            id: Number(id)
        }
      })
      
  }catch(error: any) {
    console.log( error )
    if ( error.code === 'P2025') {
      
      throw Boom.notFound('Nothing to change my dear')
     } else {
      throw(error)
     }
     
   } 
  }

  
  export const remove = async (id: Number) => {
 try{
  
    return await prisma.orderItem.delete({
        where: {
            id: Number(id),
        },
    })
} catch(error: any){
  if ( error.code === 'P2025') {
      
    throw Boom.notFound('Nothing to delete my dear')
   } else {
    throw(error)
   }
}
  }

  // ( id: number ) => {
  //   try {
  //    await prisma.orderItem.delete ({ where: { id: id  } })
     
  //    return 'remove garne api'
    
  //  } catch (error: any){
  //    console.log( error );
 
  //    if ( error.code === 'P2025') {
  //      throw Boom.notFound(' Nothing to delete my dear')
  //    } else {
  //      throw(error)
  //    }
  //  } 
  //  }



  export const findOne = async ( id: number ) => {
    try {
     return await prisma.orderItem.findFirstOrThrow ({ where: { 
      id: id 
    }, 
  })
   } catch (error: any){

     console.log( error )

     if ( error.code === 'P2025') {
      
      throw Boom.notFound('Nothing posted my dear')
     } else {
      throw(error)
     }
     
   } 
   }

   