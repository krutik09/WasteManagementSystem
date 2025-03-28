import { computed, inject, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtService } from '../jwt/jwt.service';
import { JwtPayload } from '../../models/JwtPayload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly jwtService = inject(JwtService)
  private readonly userPayload = computed(()=>{
    const token = this.jwtService.getToken()();
    return token ? this.decodeToken(token) : null;
  })
  private readonly isUserLoggedIn = computed(()=>{
    return this.jwtService.getToken()()!=null
  })
  decodeToken(token:string) {
    const tokenHelper = new JwtHelperService()
    let payload:JwtPayload =  tokenHelper.decodeToken(token)!
    return payload
  }
  getUserPayload(){
    return this.userPayload
  }
  isLoggedIn(){
    return this.isUserLoggedIn
  }
  logout(){
    this.jwtService.clearToken()
  }
}
