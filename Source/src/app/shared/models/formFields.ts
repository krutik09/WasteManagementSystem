export interface FormField{
    displayName:string
    name:string
    type: string
    placeholder:string
    options?:SelectField[]
    enumType?:any
}
export interface SelectField{
    label:string
    value:any
}
