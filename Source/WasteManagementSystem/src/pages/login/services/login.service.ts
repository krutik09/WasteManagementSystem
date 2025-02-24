import { inject, Injectable } from '@angular/core';
import { ExistingUserDataList } from '../../../shared/data/UserData';
import { JWTService } from '../../../shared/services/jwt/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly ExistingUserData = ExistingUserDataList
  private readonly JwtService = inject(JWTService)
  Login(Username:string): string{
    let loggedInUser = ExistingUserDataList.find(x=>x.username==Username)
    this.JwtService.SetJWTToken(loggedInUser)
    return this.JwtService.GetJWToken()
  }
}
