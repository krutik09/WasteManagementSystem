export interface Buttons{
    name:string,
    type:'submit'|'button'|'reset'
    className:string
    disabled:boolean
    visibility?:(...args:any[])=>any
    onClick:(...args:any[])=>any
}