import { inject, Injectable, signal } from '@angular/core';
import { NavbarMenu } from '../../models/NavbarMenus';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { UserType } from '../../../../shared/models/UserType';
import { NavbarMenusDataList } from '../../models/NavbarMenusDataList';

@Injectable({
  providedIn: 'root'
})

export class NavbarMenuService {
  private readonly authService = inject(AuthService)
  private readonly NavbarMenuDataList = NavbarMenusDataList
  showProfile = signal<boolean>(false)
  public GetMenusFromRole() {
    let userRole = this.authService.getUserRole()()
    if (userRole == UserType.Admin) {
      return this.getAdminMenu()
    }
    else if (userRole == UserType.Customer) {
      return this.getCustomerMenu()
    }
    else if (userRole == UserType.Driver) {
      return this.getDriverMenu()
    }
    else{
      return this.getDefaultMenu()
    }
  }

  private getDefaultMenu(): NavbarMenu[]{
    let result:NavbarMenu[] = []
    this.NavbarMenuDataList.filter((element)=>element.accessibility==null).forEach((element)=>{
      let toNavbarMenu:NavbarMenu = {...element}
      result.push(toNavbarMenu)
    })
    return result
  }
  private getAdminMenu(): NavbarMenu[] {
    let result:NavbarMenu[] = []
    this.NavbarMenuDataList.filter((element)=>element.accessibility!=null&&element.accessibility?.findIndex(x=>x==UserType.Admin)!=-1).forEach((element)=>{
      let toNavbarMenu:NavbarMenu = {...element}
      result.push(toNavbarMenu)
    })
    return result
  }
  private getCustomerMenu(): NavbarMenu[] {
    let result:NavbarMenu[] = []
    this.NavbarMenuDataList.filter((element)=>element.accessibility!=null&&element.accessibility?.findIndex(x=>x==UserType.Customer)!=-1).forEach((element)=>{
      let toNavbarMenu:NavbarMenu = {...element}
      result.push(toNavbarMenu)
    })
    return result
  }
  private getDriverMenu(): NavbarMenu[] {
    let result:NavbarMenu[] = []
    this.NavbarMenuDataList.filter((element)=>element.accessibility!=null&&element.accessibility?.findIndex(x=>x==UserType.Driver)!=-1).forEach((element)=>{
      let toNavbarMenu:NavbarMenu = {...element}
      result.push(toNavbarMenu)
    })
    return result
  }
}
