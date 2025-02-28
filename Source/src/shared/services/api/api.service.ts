import { computed, Injectable } from '@angular/core';
import { ExistingUserDataList } from '../../data/UserData';
import { OrderGrid } from '../../../pages/dashboard/models/OrderGrid';
import { UserGrid } from '../../../pages/dashboard/models/UserGrid';
import { ExistingOrdersData } from '../../data/OrderData';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public GetAllUser() {
    return computed(() => {
      let userGridData: UserGrid[] = []
      ExistingUserDataList().forEach(element => {
        let currentUser: UserGrid = {
          ...element,
          userRoleName: element.userRole
        }
        userGridData.push(currentUser)
      });
      return userGridData
    })

  }
  public GetAllOrders() {
    return computed(() => {
      let orderGridData: OrderGrid[] = []
      ExistingOrdersData().forEach(element => {
        let currentOrder: OrderGrid = {
          ...element,
          wasteTypeName: element.wasteType,
          customerName: element.customer.username,
          statusName: element.status
        }
        if (element.driver != null) {
          currentOrder.driverName = element.driver.username
        }
        orderGridData.push(currentOrder)
      })
      return orderGridData
    })

  }
  public RemoveUser(userName:string){
    ExistingUserDataList.set(ExistingUserDataList().filter(x=>x.username!=userName))
  }
  public EditUser(userEdited:User){
    let afterEditList:User[] = []
    ExistingUserDataList().forEach((element)=>{
      if(element.username==userEdited.username){
        element.email = userEdited.email
        element.password = userEdited.password
        element.userRole = userEdited.userRole
        afterEditList.push(element)
      }
      else{
      afterEditList.push(element)
      }
    })
    ExistingUserDataList.set(afterEditList)
  }
}
