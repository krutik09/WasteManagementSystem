import { UserType } from "../../enums/UserType";
import { NavbarMenu } from "../models/NavbarMenu";

export const NavbarMenuList:NavbarMenu[] = [
    { name: 'Signup', routerLink: '/signup'},
    { name: 'Login', routerLink: '/login'},
    {name:'Profile',routerLink:'/profile',accessibility:[UserType.Admin,UserType.Customer,UserType.Driver]},
    {name:'Orders',routerLink:'/orders',accessibility:[UserType.Admin,UserType.Customer,UserType.Driver]},
    {name:'User',routerLink:'/users',accessibility:[UserType.Admin]},
    {name:'Waste Type',routerLink:'/wasteType',accessibility:[UserType.Admin]},
    {name:'Waste Unit',routerLink:'/wasteUnit',accessibility:[UserType.Admin]},
    {name:'Statues',routerLink:'/status',accessibility:[UserType.Admin]}
]