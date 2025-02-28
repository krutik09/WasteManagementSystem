import { Component, inject, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { AuthService } from '../shared/services/auth/auth.service';
import { RouterService } from '../shared/services/router/router.service';
import { ModalComponent } from "../components/modal/modal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'WasteManagementSystem';
  private readonly authService = inject(AuthService)
  private readonly routerService = inject(RouterService)
  private readonly renderer = inject(Renderer2)
  isDarkMode = false;
  currentTheme: string = 'dark-theme'; // Default theme
  constructor() {
    if(this.authService.isUserLoggedIn()){
     // let role = this.authService.getUserRole()()
     // this.routerService.routeToDashboard(role!)
    // this.routerService.routeToProile()
    this.routerService.routeToManageUser()
    }
    else{
      this.routerService.routeToHome()
    }
  }
}
