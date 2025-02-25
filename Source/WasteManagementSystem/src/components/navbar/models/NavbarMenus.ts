export interface NavbarMenu{
    name: string
    routerLink: string
};
export const CommonNavbarMenusForRoles:NavbarMenu[] = [
    {name:'Profile',routerLink:'/profile'},
]
export const NavbarMenus: NavbarMenu[] = [
    { name: 'Home', routerLink: '/home' },
    { name: 'Signup',routerLink:'/signup'},
    { name: 'login',routerLink:'/login'},
];

export const NavbarMenusForAdminRole:NavbarMenu[] =[
    {name:'Dashboard',routerLink:'/dashboard/admin'},
    {name:'ManageUser',routerLink:'/admin/ManageUsers'},
    {name:'ManageOrders',routerLink:'/admin/ManageOrders'},
    {name:'AssignOrders',routerLink:'/admin/assignOrders'},
    ...CommonNavbarMenusForRoles
]

export const NavbarMenusForCustomerRole:NavbarMenu[] =[
    {name:'Dashboard',routerLink:'/dashboard/customer'},
    {name:'Create Order',routerLink:'/customer/order'},
    {name:'ManageOrders',routerLink:'/customer/ManageOrders'},
    ...CommonNavbarMenusForRoles
]

export const NavbarMenusForDriverRole:NavbarMenu[] =[
    {name:'Dashboard',routerLink:'/dashboard/driver'},
    {name:'ManageOrders',routerLink:'/driver/ManageOrders'},
    ...CommonNavbarMenusForRoles
]