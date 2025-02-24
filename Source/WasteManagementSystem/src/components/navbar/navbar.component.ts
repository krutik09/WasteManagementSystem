import { Component, effect, inject} from '@angular/core';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { NavbarMenu, navbarMenus } from './models/NavbarMenus';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [ButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly authService = inject(AuthService)
  NavbarMenuList:NavbarMenu[] | undefined;
  constructor() {
   this.NavbarMenuList = navbarMenus
   effect(()=>{
     console.log("update in navbar")
     console.log("userId: "+this.authService.getUserId())
   })
  }
}
