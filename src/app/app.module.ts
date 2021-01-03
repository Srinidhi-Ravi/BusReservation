import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
//import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';
import { JourneyhireComponent } from './journeyhire/journeyhire.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import {SearchbusGuard} from './guards/user-guard.guard';
import { BookingComponent } from './booking/booking.component';


 const routes:Routes = [
  
   {path: "login", component: LoginComponent},
   {path: "signup", component: SignupComponent},
   {path: "admin", component: AdminComponent},
   {path: "journeyhire", component: JourneyhireComponent},
  {path: "user", component: UserComponent},
  {path: "searchbus", component: SearchbusComponent, canActivate: [SearchbusGuard]},
  {path: "booking", component: BookingComponent},
  {path: "**", redirectTo: "user"}
]

const routing = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    JourneyhireComponent,
    SearchbusComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
