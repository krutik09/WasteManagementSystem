import { Component, Input } from '@angular/core';
import { Grid } from './models/grid';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  @Input() grid!:Grid
  @Input() data!:any[]
}
