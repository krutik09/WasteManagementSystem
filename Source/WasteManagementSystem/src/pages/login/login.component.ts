import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormFields } from './models/LoginFields';
import { FormsComponent } from "../../components/forms/forms.component";
import { UserLogin } from './models/UserLogin';
import { FormValidationErrors } from '../../components/forms/models/formValidationErrors';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsComponent],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly loginService = inject(LoginService)
 loginForm = new FormGroup({
    username: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required),
  })
  FormFields:LoginFormFields[] = [
  {
    displayName:"Username",
    name: "username",
    type: 'text',
    placeholder: 'Enter username',
  },
  {
    displayName:"Password",
    name: "password",
    type: 'password',
    placeholder: 'Enter password',
  },
]
  OnSuccess = (formGroup:FormGroup) => {
      const model: UserLogin = { ...formGroup.value };
      this.loginService.Login(model.username)
  }
  onFailed = (formGroup:FormGroup,errors:FormValidationErrors[]) => {
      console.log(errors)
  }
}
