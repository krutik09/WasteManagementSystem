import { UserType } from "../../../shared/models/UserType"

export interface NavbarMenusData{
    name:string
    routerLink:string
    accessibility?:UserType[]
}

export const NavbarMenusDataList:NavbarMenusData[]=[
    { name: 'Profile', routerLink: '/profile' ,accessibility:[UserType.Admin,UserType.Customer,UserType.Driver]},
    { name: 'Home', routerLink: '/home'},
    { name: 'Signup', routerLink: '/signup'},
    { name: 'login', routerLink: '/login'},

    { name: 'Dashboard', routerLink: '/dashboard/admin',accessibility:[UserType.Admin] },
    { name: 'ManageUser', routerLink: '/admin/ManageUsers',accessibility:[UserType.Admin] },
    { name: 'ManageOrders', routerLink: '/admin/ManageOrders',accessibility:[UserType.Admin] },
    { name: 'AssignOrders', routerLink: '/admin/assignOrders',accessibility:[UserType.Admin] },

    { name: 'Dashboard', routerLink: '/dashboard/customer',accessibility:[UserType.Customer] },
    { name: 'Create Order', routerLink: '/customer/order',accessibility:[UserType.Customer] },
    { name: 'ManageOrders', routerLink: '/customer/ManageOrders',accessibility:[UserType.Customer] },

    { name: 'Dashboard', routerLink: '/dashboard/driver',accessibility:[UserType.Driver] },
    { name: 'ManageOrders', routerLink: '/driver/ManageOrders',accessibility:[UserType.Driver] },


]