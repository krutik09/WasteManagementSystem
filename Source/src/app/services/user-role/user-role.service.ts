import { Injectable } from '@angular/core';
import { UserType } from '../../enums/UserType';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  getRole(roleName:string){
    if(roleName == 'Admin'){
      return UserType.Admin
    }
    else if(roleName == 'Driver'){
      return UserType.Driver
    }
    return UserType.Customer
  }
}
