import { computed, inject, Injectable, Signal} from '@angular/core';
import { JWTService } from '../jwt/jwt.service';
import { User } from '../../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserType } from '../../models/UserType';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly jwtService = inject(JWTService)
  private readonly userPayload = computed(()=>{
    let token = this.jwtService.getJWToken()
    if(token()==''||token()==null){
      return null
    }
    else{
      let payload: User = this.decodeToken(token())
      return payload
    }
  })
  private readonly userId = computed(()=>{
    let token = this.jwtService.getJWToken()
    if(token()==''||token()==null){
      return 0
    }
    else{
      let payload: User = this.decodeToken(token())
      return payload.Id
    }
  })
  private readonly userName = computed(()=>{
    let token = this.jwtService.getJWToken()
    if(token()==''||token()==null){
      return "Anonymous"
    }
    else{
      let payload: User = this.decodeToken(token())
      return payload.username
    }
  })
  private readonly userRole = computed(()=>{
    let token = this.jwtService.getJWToken()
    if(token()==''||token()==null){
      return null
    }
    else{
      let payload: User = this.decodeToken(token())
      return payload.userRole
    }
  }) 
  public readonly isUserLoggedIn = computed(()=>{
    let token = this.jwtService.getJWToken()
    if(token()==''||token()==null){
      return false
    }
    else{
      return true
    }
  })
  getUserPayload(): Signal<User | null>{
    return this.userPayload
  }
  getUserLoggedInStatus(): Signal<boolean>{
    return this.isUserLoggedIn
  }
  getUserId(): Signal<number> {
    return this.userId
  }
  getUserName(): Signal<string|null> {
    return this.userName
  }
  getUserRole(): Signal<UserType|null> {
    return this.userRole
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
    this.jwtService.setTokenToDefault()
  }
}
