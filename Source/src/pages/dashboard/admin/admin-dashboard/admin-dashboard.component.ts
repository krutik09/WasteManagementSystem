import { Component, inject } from '@angular/core';
import { UserGrid, UserGridColumns } from '../../models/UserGrid';
import { Grid } from '../../../../components/grid/models/grid';
import { GridComponent } from "../../../../components/grid/grid.component";
import { OrderGrid, OrderGridColumns } from '../../models/OrderGrid';
import { ApiService } from '../../../../shared/services/api/api.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [GridComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  private readonly apiService = inject(ApiService);
  userGridData:UserGrid[] = []
  userGridColumnValues:Grid = UserGridColumns
  orderGridData:OrderGrid[] = []
  orderGridColumnValues:Grid = OrderGridColumns
  constructor(){
    this.userGridData = this.apiService.GetAllUser()()
    this.orderGridData = this.apiService.GetAllOrders()()
  }
}
