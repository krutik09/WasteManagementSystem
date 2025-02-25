import { UserType } from "./UserType"

export interface User {
    Id:number
    username:string
    email:string
    password:string
    userRole:UserType
}