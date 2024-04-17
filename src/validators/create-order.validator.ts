import { z } from 'zod'
import { is_supplier } from '../middlewares/authentication.middleware'

export const createOrderDtoBody = z.object ({
    
        status: z.enum(
            [ 'pending','shipping','delievered']

        ),

        totalAmount: z.number({
            required_error: 'Total amount is required'

        }),

        
    }).strict()



export const createOrderDto = z.object ({
    body: createOrderDtoBody

})

export const updateOrderDtoBody = z.object ({
    
    status: z.enum(
        [ 'pending','shipping','delievered']

    ),

    totalAmount: z.number({
        required_error: 'Total amount is required'

    }),

        
    }).strict()


    export const updateOrderDto = z.object ({
        body: updateOrderDtoBody

    })

export const removeOrderDto = z.object ({
    body: z.object({
        id: z.number({
            required_error: 'Id is required', 

        }),

        // active: z.boolean({
        //     required_error: 'Active status is required'

        // })
    }).strict(),
})



export const findOneOrderDto = z.object ({
    body: z.object({
        status: z.enum(
            [ 'pending','shipping','delievered']
    
        ),
    
        totalAmount: z.number({
            required_error: 'Total amount is required'
    
        }),
    }).strict(),
})

export const getAllOrderDto = z.object ({
    body: z.object({
        status: z.enum(
            [ 'pending','shipping','delievered']
    
        ),
    
        totalAmount: z.number({
            required_error: 'Total amount is required'
    
        }),
    }).strict(),
})