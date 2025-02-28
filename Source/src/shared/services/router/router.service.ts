import {inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from '../../models/UserType';

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
  routeToDashboard(role:UserType){
    this.router.navigate(['/dashboard/'+ role])
  }
  routeToProile(){
    this.router.navigate(['/profile'])
  }
}
