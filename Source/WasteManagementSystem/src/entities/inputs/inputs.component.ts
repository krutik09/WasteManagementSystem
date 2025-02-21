import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  imports: [ReactiveFormsModule],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  @Input() formGroup!: FormGroup;
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = 'default placeholder';
  @Input() isFormField: boolean = false;
  @Input() formFieldName: string = '';
  @Input() class:string = "form-control"
}
