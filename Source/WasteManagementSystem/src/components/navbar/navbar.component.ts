import { Component, effect, inject, signal } from '@angular/core';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { NavbarMenu, NavbarMenus, NavbarMenusForAdminRole, NavbarMenusForCustomerRole, NavbarMenusForDriverRole } from './models/NavbarMenus';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [ButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  authService = inject(AuthService)
  NavbarMenuList = signal<NavbarMenu[]>(NavbarMenus);
  constructor() {
    effect(() => {
      if (this.authService.getUserRole() != null) {
        if (this.authService.getUserRole() == 'admin') {
          this.NavbarMenuList.set(NavbarMenusForAdminRole)
        }
        else if (this.authService.getUserRole() == 'customer') {
          this.NavbarMenuList.set(NavbarMenusForCustomerRole)
        }
        else if (this.authService.getUserRole() == 'driver') {
          this.NavbarMenuList.set(NavbarMenusForDriverRole)
        }
      }
      else{
        this.NavbarMenuList.set(NavbarMenus)
      }
    })
  }
  onLogout = () =>{
    this.authService.logOut()
  }
}
