import { UserType } from "../../enums/UserType"

export interface NavbarMenu{
    name:string
    routerLink:string
    accessibility?:UserType[]
}