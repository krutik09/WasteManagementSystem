import { inject, Injectable } from '@angular/core';
import { ExistingUserDataList } from '../../../shared/data/UserData';
import { JWTService } from '../../../shared/services/jwt/jwt.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { User } from '../../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly ExistingUserData = ExistingUserDataList()
  private readonly jwtService = inject(JWTService)
  private readonly authService = inject(AuthService)
  Login(Username: string) :boolean {
    let loggedInUser = this.ExistingUserData.find(x => x.username == Username)
    if (loggedInUser != null) {
      this.jwtService.setJWTToken(loggedInUser)
      let token = this.jwtService.getJWToken()
      let payload:User =  this.authService.decodeToken(token)
      this.authService.setUerId(payload.Id)
      this.authService.setUserName(payload.username)
      this.authService.setUserRole(payload.userRole)
      return true
    }
    else{
      return false
    }
  }
}
