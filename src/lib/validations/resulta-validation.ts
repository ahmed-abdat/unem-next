import {z} from 'zod'

export const matricule = z.object({
    matriculeNumber: z.string().min(4, {
        message: 'الرجاء إدخال رقم تسجيل صحيح'
    })
})

export type TMaticule = z.infer<typeof matricule>


export const fstRsult = z.object({
    matriculeNumber: z.string().min(4, {
        message: "Numéro d'inscription ou nom doit contenir au moins 4 caractères"
    })
})

export type TFstResult = z.infer<typeof fstRsult>