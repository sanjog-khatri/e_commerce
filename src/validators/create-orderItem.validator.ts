import { z } from 'zod'

export const createOrderDtoBody = z.object ({
    
        quantity: z.number(
            {
                required_error: 'Quantity is required'
            }

        ),
        price: z.number({
            required_error: 'price is required'

        }),

        totalPrice: z.number({
            required_error: 'Total price is required'

        }),

        // is_supplier: z.boolean().optional().default(false)
        
    }).strict()

export const createOrderDto = z.object ({
    body: createOrderDtoBody

})

export const updateOrderDtoBody = z.object ({
    
        quantity: z.number(
            {
                required_error: 'Quantity is required'
            }

        ),
        price: z.number({
            required_error: 'price is required'

        }),

        totalPrice: z.number({
            required_error: 'Total price is required'

        }),
        // is_supplier: z.boolean().optional().default(false)

        
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
        quantity: z.number(
            {
                required_error: 'Quantity is required'
            }

        ),
        price: z.number({
            required_error: 'price is required'

        }),

        totalPrice: z.number({
            required_error: 'Total price is required'

        }),


    }).strict(),
})

export const getAllOrderDto = z.object ({
    body: z.object({
        quantity: z.number(
            {
                required_error: 'Quantity is required'
            }

        ),
        price: z.number({
            required_error: 'price is required'

        }),

        totalPrice: z.number({
            required_error: 'Total price is required'

        }),

        
    }).strict(),
})