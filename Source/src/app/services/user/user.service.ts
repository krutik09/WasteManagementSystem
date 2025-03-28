import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../shared/services/auth/auth.service';
import { JwtService } from '../../shared/services/jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly httpClient =  inject(HttpClient)
  private readonly authService = inject(AuthService)
  private readonly jwtService = inject(JwtService)
  private readonly baseUri = "https://localhost:7154/api/"
  getUserById(id:number){
    return this.httpClient.get<User>(this.baseUri+`User/${id}`);
  }
  getLoggedInUser(){
    let userId = this.authService.getUserPayload()()?.nameid
    return this.getUserById(userId!)
  }
  updateUser(user:User){
    return this.httpClient.post<any>(this.baseUri+`User/Update/${user.id}`,user)
  }
}
