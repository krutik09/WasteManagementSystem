import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormFields } from './models/LoginFields';
import { FormsComponent } from "../../components/forms/forms.component";
import { UserLogin } from './models/UserLogin';
import { FormValidationErrors } from '../../components/forms/models/formValidationErrors';
import { LoginService } from './services/login.service';
import { RouterService } from '../../shared/services/router/router.service';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsComponent],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private readonly loginService = inject(LoginService)
  private readonly routerService = inject(RouterService)
  private readonly authService = inject(AuthService)
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
      debugger
      const model: UserLogin = { ...formGroup.value };
      let result = this.loginService.Login(model.username)
      if (result){
        alert("success")
        let loggedInUserRole = this.authService.getUserRole()
        this.routerService.routeToDashboard(loggedInUserRole!)
      }
      else{
        alert("Cannot find logged in user. Please register")
      }
  }
  onFailed = (formGroup:FormGroup,errors:FormValidationErrors[]) => {
      console.log(errors)
  }
}
