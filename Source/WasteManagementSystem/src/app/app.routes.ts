import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { LoginComponent } from '../pages/login/login.component';
import { AdminDashboardComponent } from '../pages/dashboard/admin/admin-dashboard/admin-dashboard.component';
import { CusomterDashboardComponent } from '../pages/dashboard/customer/cusomter-dashboard/cusomter-dashboard.component';
import { DriverDashboardComponent } from '../pages/dashboard/driver/driver-dashboard/driver-dashboard.component';
import { ProfileComponent } from '../pages/profile/profile.component';

export const routes: Routes = [
    {path :'home',component:HomeComponent},
    {path :'',component:HomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'dashboard/admin',component:AdminDashboardComponent},
    {path:'dashboard/customer',component:CusomterDashboardComponent},
    {path:'dashboard/driver',component:DriverDashboardComponent},
    {path:'logout',component:HomeComponent},
    {path:'profile',component:ProfileComponent}
];
