import { UserType } from "../../../shared/models/UserType"

export interface UserLogin{
    username:string
    password:string
    userType:UserType
}
export { UserType }

