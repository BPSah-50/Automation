import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./Components/Home/home-page/home-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginPageComponent } from "./Components/Login/login-page/login-page.component";
import { MaterialModule } from "./material/material.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ForgotpaaswordComponent } from "./Components/ForgotPassword/forgotpaasword/forgotpaasword.component";
import { HeaderComponent } from './Components/Header/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ForgotpaaswordComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
