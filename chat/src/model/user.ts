import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  varifyCode: string;
  varifyCodeExpiry: Date;
  isVerified:boolean;
  isAccesptingMessage: boolean;
  message: Message[];
}


const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "User name is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  varifyCode:{
    type: String,
    required: [true, "verify code is required"],
  },
  varifyCodeExpiry:{
    type: Date,
    required: [true, "varify Code Expiry is required"],
  },
  isVerified:{
    type: Boolean,
    default:false,
  },
  isAccesptingMessage:{
    type:Boolean,
    default:true,
  },
  message:{MessageSchema}
});


const UserModel = (mongoose.models.User as mongoose.
Model<User>) || mongoose.model<User>("User",UserSchema)

export default UserModel;