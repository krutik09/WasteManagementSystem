import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { User } from '../../models/User';
import { FormControl, FormGroup } from '@angular/forms';
import { Buttons } from '../../models/Buttons';
import { UserService } from '../../services/user/user.service';
import { FormComponent } from "../../shared/components/form/form.component";
import { FormField } from '../../shared/models/formFields';
import { UserType } from '../../enums/UserType';
import { FormValidationErrors } from '../../shared/models/formValidationErrors';

@Component({
  selector: 'app-profile',
  imports: [FormComponent],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

  private readonly userService = inject(UserService)
  isEditing = signal<boolean>(false)
  profileObj = signal<User>({
    id: 0,
    name: '',
    email: '',
    phoneNumber: '',
    userTypeId: 0,
    userTypeName: '',
    password: ''
  })

  profileFormGroup = computed(()=>{
    if(!this.isEditing())
    {
      return new FormGroup({
        name:new FormControl({value:this.profileObj().name,disabled:true}),
        email:new FormControl({value:this.profileObj().email,disabled:true}),
        phoneNumber:new FormControl({value:this.profileObj().phoneNumber,disabled:true}),
        userTypeId:new FormControl({value:this.profileObj().userTypeId,disabled:true}),
        password: new FormControl({value:this.profileObj().password,disabled:true}),
      })
    }
    else{
      return new FormGroup({
        name:new FormControl(this.profileObj().name),
        email:new FormControl({value:this.profileObj().email,disabled:true}),
        phoneNumber:new FormControl(this.profileObj().phoneNumber),
        userTypeId:new FormControl({value:this.profileObj().userTypeId,disabled:true}),
        password: new FormControl(this.profileObj().password),
      })
    }
  })

  actionBtn:Buttons[] = [
    {
      name: 'Edit',
      type: 'button',
      className: 'btn btn-danger',
      disabled: false,
      visibility:()=>{
        return !this.isEditing()
      },
      onClick: () => {
        this.editUser()
      }
    }
  ]
  profileFormfield:FormField[]=[
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
    ngOnInit(): void {
      this.userService.getLoggedInUser().subscribe((res:User)=>{
        this.profileObj.set(res)
      })
    }
  editUser(){
    this.isEditing.set(true)
  }
  onSuccess = (formGroup: FormGroup)=>{
      this.profileObj.set({...this.profileObj(),...formGroup.getRawValue()})
      console.log(this.profileObj())
      this.userService.updateUser(this.profileObj()).subscribe({
        next:() =>{
          alert("success")
        },
        error(err) {
          alert("error")
        },
      })
    }
    onFailed = (formGroup: FormGroup, errors: FormValidationErrors[]) => {
      console.log(errors)
      console.log("Form is not valid")
    }
}
