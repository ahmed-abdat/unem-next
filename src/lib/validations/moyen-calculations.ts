import { z } from "zod"

const errorMessage = {
    message : 'الرجاء إدخال رقم بين 0 و 20 و يمكن أن يحتوي على 3 أرقام بعد الفاصلة'
}

export const MoyenCalculation = z.object({
    FirsteMatiere: z.string().refine((grade) => /^\d+(\.\d{1,3})?$/.test(grade) && parseFloat(grade) <= 20, errorMessage),
    SecondMatiere: z.string().refine((grade) => /^\d+(\.\d{1,3})?$/.test(grade) && parseFloat(grade) <= 20, errorMessage),
    ThirdeMatiere: z.string().refine((grade) => /^\d+(\.\d{1,3})?$/.test(grade) && parseFloat(grade) <= 20,errorMessage),
    MoyenGenerale: z.string().refine((grade) => /^\d+(\.\d{1,3})?$/.test(grade) && parseFloat(grade) <= 20, errorMessage),
})

export type TMoyenCalculation = z.infer<typeof MoyenCalculation>