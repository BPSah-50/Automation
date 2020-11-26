import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForgotpaaswordComponent } from "./Components/ForgotPassword/forgotpaasword/forgotpaasword.component";
import { HomePageComponent } from "./Components/Home/home-page/home-page.component";
import { LoginPageComponent } from "./Components/Login/login-page/login-page.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginPageComponent,
  },

  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },

  {
    path: "fogotpassword",
    component: ForgotpaaswordComponent,
  },

  {
    path: "home",
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
