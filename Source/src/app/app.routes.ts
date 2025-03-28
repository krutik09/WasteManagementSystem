import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent}
];
