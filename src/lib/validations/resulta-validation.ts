import {z} from 'zod'

export const matricule = z.object({
    matriculeNumber: z.string().min(4, {
        message: "Numéro d'inscription ou nom doit contenir au moins 4 caractères"
    })
})

export type TMaticule = z.infer<typeof matricule>