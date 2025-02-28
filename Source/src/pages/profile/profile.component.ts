import { Component, computed, inject, signal } from '@angular/core';
import { ProfileFormFields } from './models/ProfileFormFields';
import { UserType } from '../login/models/UserLogin';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';
import { FormsComponent } from "../../components/forms/forms.component";
import { FormValidationErrors } from '../../components/forms/models/formValidationErrors';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports: [FormsComponent, ButtonsComponent]
})

export class ProfileComponent {
  private readonly authService = inject(AuthService)
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirm_password')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  };
  isEditing = signal<boolean>(false)
  isSubmitBtnDisbaled = computed(()=>{
    return !this.isEditing()
  })
  ProfileForm = signal<FormGroup>(new FormGroup({
    username: new FormControl({ value: '', disabled: true }, Validators.required),
    password: new FormControl({ value: '', disabled: true }, Validators.required),
    confirm_password: new FormControl({ value: '', disabled: true }, Validators.required),
    email: new FormControl({ value: '', disabled: true }, Validators.required),
    userType: new FormControl<UserType>({ value: UserType.Customer, disabled: true }, Validators.required)
  },
    {
      validators: this.passwordMatchValidator
    }))
  FormFields: ProfileFormFields[] = [
    {
      displayName: "Username",
      name: "username",
      type: 'text',
      placeholder: 'Enter username',
    },
    {
      displayName: "Email",
      name: "email",
      type: 'email',
      placeholder: 'Enter email',
    },
    {
      displayName: "Password",
      name: "password",
      type: 'password',
      placeholder: 'Enter password',
    },
    {
      displayName: "Confirm Password",
      name: "confirm_password",
      type: 'password',
      placeholder: 'Enter password again',
    },
    {
      displayName: "User Type",
      name: "userType",
      type: 'select',
      placeholder: 'Select type',
      enumType: UserType,
    }
  ]
  constructor() {
    this.setLoggedInUserValuesToForm()
  }
  setLoggedInUserValuesToForm(){
    let userPayload = this.authService.getUserPayload()()!
    this.ProfileForm().controls['username'].setValue(userPayload.username)
    this.ProfileForm().controls['email'].setValue(userPayload.email)
    this.ProfileForm().controls['userType'].setValue(userPayload.userRole)
    this.ProfileForm().controls['password'].setValue(userPayload.password)
    this.ProfileForm().controls['confirm_password'].setValue(userPayload.password)
  }
  onSuccess = (formGroup: FormGroup) => {
    console.log("Form is valid")
  }
  onFailed = (formGroup: FormGroup, errors: FormValidationErrors[]) => {
    console.log(errors)
    console.log("Form is not valid")
  }
  onEditing = () =>{
    this.isEditing.set(true)
    this.ProfileForm.set(new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      userType: new FormControl<UserType>(UserType.Customer, Validators.required)
    },
      {
        validators: this.passwordMatchValidator
      }))
      this.setLoggedInUserValuesToForm()
  }
  
}
