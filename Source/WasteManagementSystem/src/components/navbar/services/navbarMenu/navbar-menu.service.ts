import { inject, Injectable } from '@angular/core';
import { NavbarMenu } from '../../models/NavbarMenus';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { UserType } from '../../../../shared/models/UserType';
import { NavbarMenusDataList } from '../../models/NavbarMenusDataList';

@Injectable({
  providedIn: 'root'
})

// TODO: remove usage of multitple list use 
export class NavbarMenuService {
  private readonly authService = inject(AuthService)
  private readonly NavbarMenuDataList = NavbarMenusDataList
  CommonNavbarMenusForRoles: NavbarMenu[] = [
    { name: 'Profile', routerLink: '/profile' },
  ]
  DefaultNavbarMenus: NavbarMenu[] = [
    { name: 'Home', routerLink: '/home' },
    { name: 'Signup', routerLink: '/signup' },
    { name: 'login', routerLink: '/login' },
  ];

  NavbarMenusForAdminRole: NavbarMenu[] = [
    { name: 'Dashboard', routerLink: '/dashboard/admin' },
    { name: 'ManageUser', routerLink: '/admin/ManageUsers' },
    { name: 'ManageOrders', routerLink: '/admin/ManageOrders' },
    { name: 'AssignOrders', routerLink: '/admin/assignOrders' },
    ...this.CommonNavbarMenusForRoles
  ]

  NavbarMenusForCustomerRole: NavbarMenu[] = [
    { name: 'Dashboard', routerLink: '/dashboard/customer' },
    { name: 'Create Order', routerLink: '/customer/order' },
    { name: 'ManageOrders', routerLink: '/customer/ManageOrders' },
    ...this.CommonNavbarMenusForRoles
  ]

  NavbarMenusForDriverRole: NavbarMenu[] = [
    { name: 'Dashboard', routerLink: '/dashboard/driver' },
    { name: 'ManageOrders', routerLink: '/driver/ManageOrders' },
    ...this.CommonNavbarMenusForRoles
  ]
  public GetMenusFromRole() {
    let userRole = this.authService.getUserRole()()
    if (userRole == UserType.Admin) {
      return this.getAdminMenu()
    }
    else if (userRole == UserType.Customer) {
      return this.getCustomerMenu()
    }
    else if (userRole == UserType.Driver) {
      return this.getDriverMenu()
    }
    else{
      return this.getDefaultMenu();
    }
  }
  private getDefaultMenu(): NavbarMenu[]{
    return this.DefaultNavbarMenus;
  }
  private getAdminMenu(): NavbarMenu[] {
    return this.NavbarMenusForAdminRole
  }
  private getCustomerMenu(): NavbarMenu[] {
    return this.NavbarMenusForCustomerRole
  }
  private getDriverMenu(): NavbarMenu[] {
    return this.NavbarMenusForDriverRole
  }
}
