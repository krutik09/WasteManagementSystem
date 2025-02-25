import { Component, inject } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { UserGrid, UserGridColumns } from '../../models/UserGrid';
import { Grid } from '../../../../components/grid/models/grid';
import { GridComponent } from "../../../../components/grid/grid.component";
import { OrderGrid, OrderGridColumns } from '../../models/OrderGrid';

@Component({
  selector: 'app-admin-dashboard',
  imports: [GridComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  private readonly dashboardService = inject(DashboardService);
  userGridData:UserGrid[] = []
  userGridColumnValues:Grid = UserGridColumns
  orderGridData:OrderGrid[] = []
  orderGridColumnValues:Grid = OrderGridColumns
  constructor(){
    this.userGridData = this.dashboardService.GetAllUser()
    this.orderGridData = this.dashboardService.GetAllOrders()
  }
}
