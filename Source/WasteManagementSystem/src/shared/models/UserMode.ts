import { UserType } from "./UserType"

export interface UserModel {
    Id:number
    username:string
    email:string
    password:string
    userRole:UserType
}