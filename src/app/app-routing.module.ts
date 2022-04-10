import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { ListingslistComponent } from './listingslist/listingslist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:'', component: ListingslistComponent },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'admin', component: AdmindashboardComponent},
  { path:'customer', component: CustomerdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
