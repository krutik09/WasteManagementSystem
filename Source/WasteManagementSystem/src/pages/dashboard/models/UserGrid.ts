import { Grid } from '../../../components/grid/models/grid';
export interface UserGrid {
    Id:number
    username:string
    email:string
    password:string
    userRoleName:string
}
export const UserGridColumns:Grid = {
    Columns: ['Id','username','email','password','userRoleName'],
    DisplayColumns: ['Id','Username','Email','Password','Role']
}