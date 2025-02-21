import { Component } from '@angular/core';
import { FormsComponent } from "../../components/forms/forms.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupFormFields } from './models/signup';

@Component({
  selector: 'app-signup',
  imports: [FormsComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  SignUpForm = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
    email: new FormControl("",Validators.required)
  })
  FormFields:SignupFormFields[] = [
  {
    name: "username",
    type: 'text',
    placeholder: 'Enter username'
  },
  {
    name: "email",
    type: 'email',
    placeholder: 'Enter email'
  },
  {
    name: "password",
    type: 'password',
    placeholder: 'Enter password'
  }
]
  OnSuccess(formGroup:FormGroup){
      console.log("Form is valid")
  }
  onFailed(formGroup:FormGroup){
      console.log("Form is not valid")
  }
}
