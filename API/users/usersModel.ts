import mongoose, {Schema} from "mongoose";


interface User{
        username: string,
        password: string,
        email: string,
        birthday: Date,
}
export enum UserType {
    PUBLIC = "public",
    ADMIN = "admin",
  }

export const UserSchema= new Schema<User>({
    username: {require: true, type:String},
    password: {require: true, type:String},
    email: {require:true, type:String},
    birthday: {require:true, type:Date},
    userType: {
        type: String,
        enum: UserType,
        default: UserType.PUBLIC,
      },
})

const UserModel = mongoose.model("users",UserSchema);

export default UserModel;