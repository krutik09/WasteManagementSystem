export interface NavbarMenu{
    name: string
    routerLink: string
};

export const navbarMenus: NavbarMenu[] = [
    { name: 'Home', routerLink: '/home' },
    { name: 'Signup',routerLink:'/signup'},
    { name: 'login',routerLink:'/login'}
];