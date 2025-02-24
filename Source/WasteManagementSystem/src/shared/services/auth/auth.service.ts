import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { JWTService } from '../jwt/jwt.service';
import { UserModel } from '../../models/UserMode';
import { UserType } from '../../models/UserType';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly router= inject(Router)
  private readonly jwtService = inject(JWTService)
  private readonly userPayload:UserModel = {
    Id: 0,
    username: '',
    email: '',
    password: '',
    userRole: UserType.Customer
  };
  private readonly userId = signal<number>(0)
  private readonly userName = signal<string>("")
  private readonly userRole = signal<UserType>(UserType.Customer)
  constructor() {
    effect(()=>{
    let payload:UserModel = this.jwtService.decodeToken()
    if(payload!=null){
    this.userId.set(payload.Id)
    this.userName.set(payload.username)
    this.userRole.set(payload.userRole)
    }
    else{
      this.logOut()
    }
    })
    
  }
  isTokenExpired(token: string): void {
    const expiry = (JSON.parse(window.atob(token.split('.')[1]))).exp;
    if (expiry < Date.now() / 1000) {
      alert("Session Expired ! Plz Login Again")
      this.logOut();
    }
  }
  async logOut() {
      localStorage.clear();
      this.router.navigate(['/login'])
  }
  getUserId():number{
    return this.userId()
  }
  getUserName():string{
    return this.userName()
  }
  getUserRole():string{
    return this.userRole()
  }
}
