import {z} from 'zod'

export const BacNumber = z.object({
    bacNumber: z.string().min(4, {
        message: 'الرجاء إدخال رقم باكلوريا صحيح يتكون من 4 إلى 6 أرقام'
    }).max(6, {
        message: 'الرجاء إدخال رقم باكلوريا صحيح يتكون من 4 إلى 6 أرقام'
    })
})

export type TBacNumber = z.infer<typeof BacNumber>