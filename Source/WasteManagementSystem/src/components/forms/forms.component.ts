import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { FormFields } from './models/formFields';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, ButtonsComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  @Input()
  formGroup!: FormGroup;

  @Input()
  onValidationSuccess!:((formGroup:FormGroup) => any);

  @Input()
  onValidationFailed!:((formGroup:FormGroup) => any);

  @Input()
  heading!: string;

  @Input() formFields!:FormFields[]
  
  onSubmitForm(formGroup: FormGroup<any>) {
    if(formGroup.valid){
      this.onValidationSuccess(formGroup);
    }else{
      this.onValidationFailed(formGroup);
    }
  }
}
