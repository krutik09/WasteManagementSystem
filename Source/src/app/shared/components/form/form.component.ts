import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../models/formFields';
import { FormValidationErrors } from '../../models/formValidationErrors';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  @Input() disableSubmitbtn:boolean = false
  @Input() formGroup!:FormGroup
  @Input() formFields!:FormField[]
  @Input() heading!:string
  @Input() onValidationSuccess!:(formGroup: FormGroup)=>any
  @Input() onValidationFailed!:(formGroup: FormGroup,formValidationErrors:FormValidationErrors[])=>any
  showValidationErrors: boolean = false
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
      this.showValidationErrors = true
      this.onValidationFailed(formGroup,this.getFormValidationErrors());
    }
  }
}
