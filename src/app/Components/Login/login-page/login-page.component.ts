import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  // loginForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   username: ["", Validators.required],
    //   pasword: ["", Validators.required],
    // });
  }
  rooter() {
    this.router.navigate(["/fogotpassword"]);
  }
}
