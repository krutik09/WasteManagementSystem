import { Component, Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buttons',
  imports: [RouterModule],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent{
  @Input()
  onClick!: ((...args:any[]) => any);
  @Input()
  isRouting:  boolean | undefined = false;
  @Input()
  routerLink: string | undefined;
  @Input()
  name: string | undefined;
  @Input()
  class: string | undefined;
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; 
  @Input() disabled:boolean = false;
}
