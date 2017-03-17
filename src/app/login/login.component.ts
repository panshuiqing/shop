import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';

@Component({
  selector: 'ax-login',
  template: require('./login.component.html')
})
export class LoginComponent {

  @Input()
  rememberMe: boolean;

  @Input()
  loginName: string = '';

  @Input()
  password: string = '';

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    let savedUser = this.loginService.loadStorage();
    if (savedUser != null && savedUser.rememberMe) {
      this.loginName = savedUser.loginName;
      this.password = savedUser.password;
      this.rememberMe = savedUser.rememberMe;
    }
  }

  logOn() {
    let logined = this.loginService.logOn({ loginName: this.loginName, password: this.password, rememberMe: this.rememberMe });
    if (logined) {
      this.route.navigate(['/home']);
    }
  }
}