import dbConnect from "@/src/lib/dbConnect";
import User from "@/src/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail} from "@/src/helpers/sendVericifationemail"
import { success } from "zod";

export async function POST(request : Request) {
    await dbConnect();
    try {
        const { username,email,password } = await request.json();
        const existingUserVerifiedByUserName = await User.findOne({
            username,
            isVerified: true,
        })
        if (existingUserVerifiedByUserName){
            return Response.json({ success: false, message : "Username already taken" }, { status: 409 });
        }
        
        const existingUserByEmail = await User.findOne({ email });
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        if(existingUserByEmail){
            return Response.json({ success: false, message : "Email already registered" }, { status: 409 });
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 1);
            new User({
                username,
                email,
                password: hashedPassword,
                verifyCode,
                varifyCodeExpiry : expiryDate,
                isVerified: false,
                isAccesptingMessage:true,
                messages : [],
            })
        }
    } catch (error) {
        console.error("Error during user sign-up:", error);
        return new Response(JSON.stringify({success: false, message: "Internal Server Error" }), { status: 500 });
    }
}