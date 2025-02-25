import {inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private readonly router = inject(Router)
  routeToHome(){
    this.router.navigate(['/home'])
  }
  routeToLogin(){
    this.router.navigate(['/login'])
  }
  routeToDashboard(role:string){
    this.router.navigate(['/dashboard/'+ role])
  }
}
