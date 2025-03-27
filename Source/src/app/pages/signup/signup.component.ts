import { Component, inject } from '@angular/core';
import { Signup } from '../../models/Signup';
import { FormField } from '../../shared/models/formFields';
import { UserType } from '../../enums/UserType';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';
import { FormValidationErrors } from '../../shared/models/formValidationErrors';
import { FormComponent } from "../../shared/components/form/form.component";

@Component({
  selector: 'app-signup',
  imports: [FormComponent],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  private readonly signupService = inject(SignupService)
  signupObj:Signup = {
    name: '',
    email: '',
    phoneNumber: 0,
    userTypeId: 0,
    password: ''
  }
  signUpForm:FormGroup = new FormGroup({
    name: new FormControl(this.signupObj.name,Validators.required),
    email: new FormControl(this.signupObj.email,Validators.required),
    password: new FormControl(this.signupObj.password,Validators.required),
    phoneNumber: new FormControl(this.signupObj.phoneNumber,Validators.required),
    userTypeId: new FormControl(this.signupObj.userTypeId,Validators.required),
  })
  signUpFormfield:FormField[]=[
    {
      name:'name',
      displayName:'name',
      placeholder:'Enter your name',
      type:'text'
    },
    {
      name:'email',
      displayName:'Email',
      placeholder:'Enter your email',
      type:'text'
    },
    {
      name:'phoneNumber',
      displayName:'Phone Number',
      placeholder:'Enter your Phone Number',
      type:'number'
    },
    {
      name:'userTypeId',
      displayName:'User Type Name',
      type:'select',
      enumType:UserType
    },
    {
      name:'password',
      displayName:'password',
      placeholder:'Enter your password',
      type:'password'
    },
  ]
  onSuccess = (formGroup: FormGroup)=>{
      this.signupObj = this.signUpForm.value as Signup;
      this.signupService.SignUp(this.signupObj).subscribe((res)=>{
        alert("success")
      })
    }
    onFailed = (formGroup: FormGroup, errors: FormValidationErrors[]) => {
      console.log(errors)
      console.log("Form is not valid")
    }
}
