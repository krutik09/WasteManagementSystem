import { Component, inject } from '@angular/core';
import { Login } from '../../models/Login';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormField } from '../../shared/models/formFields';
import { FormValidationErrors } from '../../shared/models/formValidationErrors';
import { FormComponent } from "../../shared/components/form/form.component";
import { LoginService } from '../../services/login/login.service';
import { JwtService } from '../../shared/services/jwt/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private readonly loginService = inject(LoginService)
  private readonly routerService = inject(Router)
  private readonly jwtService = inject(JwtService)
  loginObj:Login = {
    email: '',
    password: ''
  }
  loginFormGroup= new FormGroup({
    email:new FormControl(this.loginObj.email,Validators.required),
    password:new FormControl(this.loginObj.password,Validators.required)
  })
  loginFormField:FormField[] = [
    {
      name:'email',
      displayName:'Email',
      placeholder:'Enter your email',
      type:'text'
    },
    {
      name:'password',
      displayName:'password',
      placeholder:'Enter your password',
      type:'password'
    },
  ]
  onSuccess = (formGroup: FormGroup)=>{
    this.loginObj = this.loginFormGroup.value as Login;
    this.loginService.login(this.loginObj).subscribe((res)=>{
      this.jwtService.setToken(res)
      this.routerService.navigate(['/profile'])
    })
  }
  onFailed = (formGroup: FormGroup, errors: FormValidationErrors[]) => {
    console.log(errors)
    console.log("Form is not valid")
  }
}
