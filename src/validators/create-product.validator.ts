import { z } from 'zod'
import { is_supplier } from '../middlewares/authentication.middleware'

export const createProductDtoBody = z.object ({
    
        name: z.string({
            required_error: 'Name is required', 

        }),

        description: z.string({
            required_error: 'Description status is required'

        }),

        price: z.number({
            required_error: 'price is required'

        }),

        quantity: z.number({
            required_error: 'quantity is required'

        }),

        category: z.string({
            required_error: 'category is required'

        }),

        is_supplier: z.boolean().optional().default(false)
        
    }).strict()

export const createProductDto = z.object ({
    body: createProductDtoBody

})

export const updateProductDtoBody = z.object ({
    
    name: z.string({
        required_error: 'Name is required', 

    }),

    description: z.string({
        required_error: 'Description status is required'

    }),

    price: z.number({
        required_error: 'price is required'

    }),

    quantity: z.number({
        required_error: 'quantity is required'

    }),

    category: z.string({
        required_error: 'category is required'

    }),
        is_supplier: z.boolean().optional().default(false)

        
    }).strict()



    export const updateProductDto = z.object ({
        body: updateProductDtoBody

    })

export const removeProductDto = z.object ({
    body: z.object({
        id: z.number({
            required_error: 'Id is required', 

        }),

        // active: z.boolean({
        //     required_error: 'Active status is required'

        // })
    }).strict(),
})



export const findOneProductDto = z.object ({
    body: z.object({
        name: z.string({
            required_error: 'Name is required', 

        }),

        description: z.string({
            required_error: 'Description status is required'

        }),

        price: z.number({
            required_error: 'price is required'

        }),

        quantity: z.number({
            required_error: 'quantity is required'

        }),

        category: z.string({
            required_error: 'category is required'

        }),
    }).strict(),
})

// export const getAllProductDto = z.object ({
//     body: z.object({
//         title: z.string({
//             required_error: 'Name is required', 

//         }),

//         active: z.boolean({
//             required_error: 'Active status is required'

//         })
//     }).strict(),
// })