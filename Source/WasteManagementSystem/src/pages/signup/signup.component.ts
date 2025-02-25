import { Component, inject } from '@angular/core';
import { FormsComponent } from "../../components/forms/forms.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupFormFields } from './models/SignupFields';
import { FormValidationErrors } from '../../components/forms/models/formValidationErrors';
import { UserType } from '../login/models/UserLogin';
import { UserRegister } from './models/UserRegistration';
import { AuthService } from '../../shared/services/auth/auth.service';
import { RouterService } from '../../shared/services/router/router.service';

@Component({
  selector: 'app-signup',
  imports: [FormsComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  authService = inject(AuthService)
  routerService = inject(RouterService)
  SignUpForm = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    userType: new FormControl<UserType>(UserType.Customer, Validators.required)
  })

  FormFields: SignupFormFields[] = [
    {
      displayName: "Username",
      name: "username",
      type: 'text',
      placeholder: 'Enter username'
    },
    {
      displayName: "Email",
      name: "email",
      type: 'email',
      placeholder: 'Enter email'
    },
    {
      displayName: "Password",
      name: "password",
      type: 'password',
      placeholder: 'Enter password'
    },
    {
      displayName: "User Type",
      name: "userType",
      type: 'select',
      placeholder: 'Select type',
      enumType: UserType
    }
  ]
  OnSuccess = (formGroup: FormGroup) => {
    const model: UserRegister = { ...formGroup.value };
    console.log(model)
    console.log("Form is valid")
  }
  onFailed = (formGroup: FormGroup, errors: FormValidationErrors[]) => {
    console.log(errors)
    console.log("Form is not valid")
  }
}
