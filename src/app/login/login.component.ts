import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
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

  msgs: Message[] = [];

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
    let savedUser = this.loginService.loadSavedUser();
    if (savedUser != null && savedUser.rememberMe) {
      this.loginName = savedUser.loginName;
      this.password = savedUser.password;
      this.rememberMe = savedUser.rememberMe;
    }
  }

  logOn() {
    let result = this.loginService.logOn({ loginName: this.loginName, password: this.password, rememberMe: this.rememberMe });
    if (result.valid) {
      this.route.navigate(['/home']);
    }
    else {
      this.msgs = [];
      this.msgs.push({ severity: 'error', summary: '错误提示', detail: result.message });
    }
  }
}