import { Component, computed, inject } from '@angular/core';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { AuthService } from '../../shared/services/auth/auth.service';
import { RouterService } from '../../shared/services/router/router.service';
import { NavbarMenuService } from './services/navbarMenu/navbar-menu.service';

@Component({
  selector: 'app-navbar',
  imports: [ButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  authService = inject(AuthService)
  private readonly routerService = inject(RouterService)
  private readonly navbarMenuService = inject(NavbarMenuService)
  NavbarMenuList = computed(()=>{
   return this.navbarMenuService.GetMenusFromRole()
  })
  onLogout = () => {
    this.authService.logOut()
    this.routerService.routeToHome()
  }
}
