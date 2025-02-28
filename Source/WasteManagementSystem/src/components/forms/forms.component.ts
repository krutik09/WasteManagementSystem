import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { FormFields } from './models/formFields';
import { CommonModule } from '@angular/common';
import { FormValidationErrors } from './models/formValidationErrors';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule, ButtonsComponent,CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit{
  @Input()
  formGroup!: FormGroup;
  @Input()
  DisableSubmitBtn:boolean = false;
  @Input()
  onValidationSuccess!:((formGroup:FormGroup) => any);

  @Input()
  onValidationFailed!:((formGroup:FormGroup,errors:FormValidationErrors[]) => any);

  @Input()
  heading!: string;

  @Input() formFields!:FormFields[]
  ShowValidationErrors: boolean = false;
  getFormValidationErrors(): FormValidationErrors[] {
    const errors: { field: string; errors: any }[] = [];
    
    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      if (control && control.errors) {
        errors.push({ field, errors: control.errors });
      }
    });
  
    return errors;
  }
  ngOnInit(): void {
    this.formFields.forEach(field => {
      if (field.type === 'select' && field.enumType) {
        field.options = Object.keys(field.enumType)
          .map(key => ({ label: key, value: field.enumType[key] }));
      }
    });
  }
  onSubmitForm(formGroup: FormGroup) {
    if(formGroup.valid){
      this.onValidationSuccess(formGroup);
    }else{
      this.ShowValidationErrors = true
      this.onValidationFailed(formGroup,this.getFormValidationErrors());
    }
  }
}
