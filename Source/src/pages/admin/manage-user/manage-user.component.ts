import { Component, computed, inject, signal } from '@angular/core';
import { ApiService } from '../../../shared/services/api/api.service';
import { ManageUserGridColumns } from './models/ManageUserGrid';
import { ActionBtns, Grid } from '../../../components/grid/models/grid';
import { GridComponent } from "../../../components/grid/grid.component";
import { UserGrid } from '../../dashboard/models/UserGrid';
import { ModalService } from '../../../components/modal/services/modal/modal.service';
import { OverlayComponent } from "../../../components/overlay/overlay.component";
import { FormsComponent } from "../../../components/forms/forms.component";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidationErrors } from '../../../components/forms/models/formValidationErrors';
import { UserType } from '../../login/models/UserLogin';
import { passwordMatchValidator } from '../../../shared/validator/Validator';
import { ProfileFormFields } from '../../profile/models/ProfileFormFields';
import { ButtonsComponent } from "../../../entities/buttons/buttons.component";
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-manage-user',
  imports: [GridComponent, OverlayComponent, FormsComponent, ButtonsComponent],
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.scss'
})
export class ManageUserComponent {
  private readonly apiService = inject(ApiService);
  private readonly modalService = inject(ModalService)
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
    
  EditUserForm = signal<FormGroup>(new FormGroup({}))
  isEditing = signal<boolean>(false)
  ManageUserGridColumnValues: Grid = ManageUserGridColumns
  ManageUserGridData = computed(() => {
    return this.apiService.GetAllUser()()
  })
  ManageUserActionBtns: ActionBtns[] = []
  constructor() {
    this.ManageUserActionBtns = [
      {
        name: 'remove',
        className: 'btn btn-primary m-1',
        onClick: this.removeUser
      },
      {
        name: 'edit',
        className: 'btn btn-primary m-1',
        onClick: this.editUser
      }
    ]
    this.ManageUserGridColumnValues.actionsBtns = this.ManageUserActionBtns
  }
  removeUser = (user: UserGrid) => {
    this.modalService.show("confirm delete", "Are you sure you want to delete this user?", () => {
      alert("User didnt confirm delete")
    }, () => {
      this.apiService.RemoveUser(user.username)
    })

  }
  getUserTypeFromString(userRoleName:string){
    if(userRoleName=="admin"){
      return UserType.Admin
    }
    else if(userRoleName=="customer"){
      return UserType.Customer
    }
    else{
      return UserType.Driver
    }
  }
  editUser = (user: UserGrid) => {
    this.EditUserForm.set(new FormGroup({
      username: new FormControl({value:user.username,disabled:true}, Validators.required),
      password: new FormControl(user.password, Validators.required),
      confirm_password: new FormControl(user.password, Validators.required),
      email: new FormControl(user.email, Validators.required),
      userType: new FormControl<UserType>(this.getUserTypeFromString(user.userRoleName), Validators.required)
      },
        {
          validators:passwordMatchValidator
        }))
    this.isEditing.set(true)
  }
  onUserEditSuccess = (formGroup: FormGroup) => {
     const user:User = {
      ...formGroup.getRawValue(),
     }
     user.userRole = this.getUserTypeFromString(user.userRole)
     this.apiService.EditUser(user)
     this.closeEditing()
      console.log("Form is valid")
    }
  onUserEditFailed = (formGroup: FormGroup, errors: FormValidationErrors[]) => {
      console.log(errors)
      console.log("Form is not valid")
    }
  closeEditing = ()=>{
    this.isEditing.set(false)
  }
}
