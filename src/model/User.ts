import mongoose, { Schema, Document } from "mongoose";

export interface Massage extends Document {
    content: string;
    createdAt: Date
}

const MassageSchema: Schema<Massage> = new Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now }
})


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    isVerified: boolean;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    message: Massage[]
}


const UserSchema: Schema<User> = new Schema({
    username: { type: String, required: [true, "Username is Required"], trim: true, unique: true },
    email: {
        type: String,
        required: [true, "Username is Required"],
        unique: true
    },
    password: {
        type:String,
        required: [true, "Please enter password"]
    },
    verifyCode: {
        type: String,
        required: [true, "verify code is Requied"]
    },
    verifyCodeExpiry: {type: Date, required: [true, "verify code Expirey is Required"] },
    isVerified:{type: Boolean, default: false },
    isAcceptingMessage:{type: Boolean, default: false },
    message: [MassageSchema]

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;