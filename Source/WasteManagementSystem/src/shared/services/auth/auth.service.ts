import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { JWTService } from '../jwt/jwt.service';
import { User } from '../../models/User';
import { UserType } from '../../models/UserType';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly router = inject(Router)
  private readonly jwtService = inject(JWTService)
  private readonly userId = signal<number>(0)
  private readonly userName = signal<string|null>(null)
  private readonly userRole = signal<UserType|null>(null)
  public readonly isUserLoggedIn = signal<boolean>(false)
  constructor() {
    effect(() => {
      let token = this.jwtService.token()
      let payload: User = this.decodeToken(token)
      if (payload != null) {
        this.onTokenChangesOrRefresh(payload)
      }
      else {
        this.logOut()
      }
    })
  }
  private onTokenChangesOrRefresh(payload:User){
    this.setUerId(payload.Id)
    this.setUserName(payload.username)
    this.setUserRole(payload.userRole)
    this.setUserLoggedIn(true)
  }
  setUerId(Id:number){
    this.userId.set(Id)
  }
  setUserName(name:string){
    this.userName.set(name)
  }
  setUserRole(userType:UserType|null){
    this.userRole.set(userType)
  }
  setUserLoggedIn(b:boolean){
    this.isUserLoggedIn.set(b)
  }
  getUserLoggedInStatus(): boolean{
    return this.isUserLoggedIn()
  }
  getUserId(): number {
    return this.userId()
  }
  getUserName(): string|null {
    return this.userName()
  }
  getUserRole(): string|null {
    return this.userRole()
  }
  isTokenExpired(token: string): void {
    const expiry = (JSON.parse(window.atob(token.split('.')[1]))).exp;
    if (expiry < Date.now() / 1000) {
      alert("Session Expired ! Plz Login Again")
      this.logOut();
    }
  }
  decodeToken(token:string) {
    const tokenHelper = new JwtHelperService()
    return tokenHelper.decodeToken(token)
  }
  logOut() {
    localStorage.clear();
    this.setUerId(0);
    this.setUserName('');
    this.setUserRole(null);
    this.setUserLoggedIn(false);
    this.router.navigate(['/login'])
  }
}
