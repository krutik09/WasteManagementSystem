import { Component} from '@angular/core';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { NavbarMenu, navbarMenus } from './models/NavbarMenus';

@Component({
  selector: 'app-navbar',
  imports: [ButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  NavbarMenuList:NavbarMenu[] | undefined;
  constructor() {
   this.NavbarMenuList = navbarMenus
  }
}
