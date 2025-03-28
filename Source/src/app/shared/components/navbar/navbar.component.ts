import { Component, inject } from '@angular/core';
import { NavbarMenuService } from '../../services/navbar-menu/navbar-menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  NavbarMenuService = inject(NavbarMenuService)
  logout(){
    this.NavbarMenuService.logout()
  }
}
