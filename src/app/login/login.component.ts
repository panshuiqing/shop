
import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  template: require('./login.component.html')
})
export class LoginComponent {

  constructor(loginService: LoginService) {
    console.log("login status " + loginService.logined);
  }
}