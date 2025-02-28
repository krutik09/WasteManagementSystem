import { Component, computed, inject} from '@angular/core';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { AuthService } from '../../shared/services/auth/auth.service';
import { RouterService } from '../../shared/services/router/router.service';
import { NavbarMenuService } from './services/navbarMenu/navbar-menu.service';
import { ModalService } from '../modal/services/modal/modal.service';
@Component({
  selector: 'app-navbar',
  imports: [ButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent{
  authService = inject(AuthService)
  modalService = inject(ModalService)
  private readonly routerService = inject(RouterService)
  private readonly navbarMenuService = inject(NavbarMenuService)
  NavbarMenuList = computed(()=>{
   return this.navbarMenuService.GetMenusFromRole()
  })
  onClose = () =>{
    console.log("Modal close called")
  }
  onConfirm = () =>{
    console.log("Modal confirm called")
  }
  showModal = () =>{
    this.modalService.show("confirm","test message",this.onClose,this.onConfirm);
  }
  onLogout = () => {
    this.authService.logOut()
    this.routerService.routeToHome()
  }
}
