import { z } from 'zod'
import { is_supplier } from '../middlewares/authentication.middleware'

export const createUserDtoBody = z.object ({

    username: z.string({
        required_error: 'username  is required',

    }),
    
    email: z.string({
        required_error: 'email is required', 

    }),

    password: z.string({
        required_error: 'passsword  is required',

    }),


    address: z.string({
        required_error: 'address  is required',

    }),

    phone: z.string({
        required_error: 'passsword  is required',

    }),

    is_supplier: z.boolean().optional().default(false)

}).strict()

export const createUserDto = z.object ({
    body: createUserDtoBody
})
