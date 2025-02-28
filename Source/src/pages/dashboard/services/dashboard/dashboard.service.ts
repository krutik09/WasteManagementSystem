import { Injectable } from '@angular/core';
import { ExistingUserDataList } from '../../../../shared/data/UserData';
import { ExistingOrdersData } from '../../../../shared/data/OrderData';
import { UserGrid } from '../../models/UserGrid';
import { OrderGrid } from '../../models/OrderGrid';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly ExistingUserData = ExistingUserDataList()
  private readonly ExistingOrderData = ExistingOrdersData()
  public GetAllUser():UserGrid[]{
    let userGridData:UserGrid[] = []
    this.ExistingUserData.forEach(element => {
       let currentUser:UserGrid = {
         ...element,
         userRoleName: element.userRole
       }
       userGridData.push(currentUser)
    }); 
    return userGridData
  }
  public GetAllOrders():OrderGrid[]{
    let orderGridData:OrderGrid[] = []
    this.ExistingOrderData.forEach(element =>{
      let currentOrder:OrderGrid = {
        ...element,
        wasteTypeName: element.wasteType,
        customerName: element.customer.username,
        statusName: element.status
      }
      if(element.driver!=null){
        currentOrder.driverName = element.driver.username
      }
      orderGridData.push(currentOrder)
    })
    return orderGridData
  }

}
