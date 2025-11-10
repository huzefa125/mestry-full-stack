import { z} from "zod"

export const usernameValidation = z
    .string()
    .min(2,"Username must be at least 2 chars")
    .max(20,"Username must be no more than 20 characters"
)

export const singUpValidation = z.object({
    username:usernameValidation,
    email:z.string().email({message:"Invalid email adddress"}),
    password:z.string().min(6,{message:"Password must be at least 6 characters"})
})