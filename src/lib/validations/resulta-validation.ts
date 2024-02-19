import {z} from 'zod'

export const matricule = z.object({
    matriculeNumber: z.string().min(4, {
        message: 'الرجاء إدخال رقم تسجيل صحيح'
    })
})

export type TMaticule = z.infer<typeof matricule>