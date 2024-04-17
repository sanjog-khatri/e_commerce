import { PrismaClient } from "@prisma/client"
import  Boom from "@hapi/boom"
import { any, z } from "zod"
import { createOrderDtoBody } from "../validators/create-order.validator"

const prisma = new PrismaClient()

export const getAll = async () => {
  try { 
    
  return await prisma.order.findMany( )
    }
    // return await prisma.order.findMany()
    
  catch (error: any) {
    
    console.log( error );

    if ( error.code === 'P2025') {
        throw Boom.notFound(' nothing to show my dear ')
    } else {
      throw (error)
    }
  }
}
  
  
  
  
  export const create = async (body: z.infer<typeof createOrderDtoBody>, userId: number, orderItemId: number) => {
    const { status, totalAmount } = body
    // try {

        let createdOrder: any;

        await prisma.$transaction( async ( tx ) => {
          createdOrder = await tx.order.create({
          data: {
        
            status,
            totalAmount,
            userId: userId,
            orderItemId: orderItemId
    
          },
          
        })

    })

    return createdOrder
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
    const { status, totalAmount } = body
     try {

      return await prisma.order.update({
        data:{
            
            status,
            totalAmount,
            
            
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
  
    return await prisma.order.delete({
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
  //    await prisma.order.delete ({ where: { id: id  } })
     
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
     return await prisma.order.findFirstOrThrow ({ where: { 
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

   