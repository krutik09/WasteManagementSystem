import { Grid } from "../../../components/grid/models/grid"

export interface OrderGrid {
    orderId: number
    wasteTypeName: string
    wasteAmount: number
    customerName: string
    driverName?: string
    orderDate: string
    statusName: string
}
export const OrderGridColumns:Grid = {
    Columns: ['orderId','wasteTypeName','wasteAmount','customerName','driverName','orderDate','statusName'],
    DisplayColumns: ['Id','Waste Type','Amount of waste','Customer Name','Driver name','Order date','Status Name']
}