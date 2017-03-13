import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'ax-login',
  template: require('./login.component.html')
})
export class LoginComponent {

  constructor(private loginService: LoginService, private route: Router) { }

  logOn() {
    this.loginService.logined = true;
    this.route.navigate(['/home']);
  }
}