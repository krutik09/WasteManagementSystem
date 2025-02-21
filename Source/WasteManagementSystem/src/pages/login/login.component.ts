import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormFields } from './models/login';
import { FormsComponent } from "../../components/forms/forms.component";

@Component({
  selector: 'app-login',
  imports: [FormsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 loginForm = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
    remember_me: new FormControl(false,Validators.required)
  })
  FormFields:LoginFormFields[] = [
  {
    name: "username",
    type: 'text',
    placeholder: 'Enter username'
  },
  {
    name: "password",
    type: 'password',
    placeholder: 'Enter password'
  },
  {
    name: "remember_me",
    type: 'checkbox',
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
