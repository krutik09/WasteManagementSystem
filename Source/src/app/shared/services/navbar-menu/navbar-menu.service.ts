import { computed, inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { NavbarMenuList } from '../../data/navbar-menu-list';
import { UserType } from '../../../enums/UserType';
import { UserRoleService } from '../../../services/user-role/user-role.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavbarMenuService {
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  private readonly userRoleService = inject(UserRoleService)
  private readonly navbarMenuList = NavbarMenuList
  private readonly menus = computed(()=>{
    if(!this.authService.isLoggedIn()()){
      return this.getDefaultNavbarMenus()
    }
    else{
      let roleStr = this.authService.getUserPayload()()?.role
      let roleType = this.userRoleService.getRole(roleStr!)
      return this.getNavbarMenusFromRole(roleType)
    }
  })
  public getMenus(){
    return this.menus
  }
  public getLoggedInUser(){
    return this.authService.getUserPayload()
  }
  public logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
  private getDefaultNavbarMenus(){
    return this.navbarMenuList.filter((element)=>element.accessibility==null);
  }
  private  getNavbarMenusFromRole(userType:UserType){
    if(userType == UserType.Admin){
      return this.getAdminNavbarMenus()
    }
    else if(userType == UserType.Driver){
      return this.getDriverNavbarMenus()
    }
    else{
      return this.getCustomerNavbarMenus()
    }
  }
  private getAdminNavbarMenus(){
    return this.navbarMenuList.filter((element)=>{
      if(element.accessibility!=null){
        let idx = element.accessibility.findIndex(x=>x==UserType.Admin);
        return idx!=-1;
      }
      return false;
    });
  }
  private getCustomerNavbarMenus(){
    return this.navbarMenuList.filter((element)=>{
      if(element.accessibility!=null){
        let idx = element.accessibility.findIndex(x=>x==UserType.Customer);
        return idx!=-1;
      }
      return false;
    });
  }
  private getDriverNavbarMenus(){
    return this.navbarMenuList.filter((element)=>{
      if(element.accessibility!=null){
        let idx = element.accessibility.findIndex(x=>x==UserType.Driver);
        return idx!=-1;
      }
      return false;
    });
  }
}
