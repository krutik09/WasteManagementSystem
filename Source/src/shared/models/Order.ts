import { Status } from "./status"
import { User } from "./User"
import { WasteType } from "./WasteType"

export interface Order{
    orderId:number
    wasteType:WasteType
    wasteAmount:number
    customer:User
    driver?:User
    orderDate:string
    status:Status
}