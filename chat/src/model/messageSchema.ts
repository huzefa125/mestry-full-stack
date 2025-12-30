import { Content } from "next/font/google";
import {z} from "zod"

export const messageSchema = z.object({
    Content:z.string().min(10,{message:"content must be at least 10 digits"}).max(30,"Content must be under 300 characters")
})
