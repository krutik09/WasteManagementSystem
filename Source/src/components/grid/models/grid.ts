export interface Grid{
    Columns:string[],
    DisplayColumns:string[]
    actionsBtns?:ActionBtns[]
}
export interface ActionBtns{
    name:string
    className:string
    onClick:(...args:any[])=>any
}