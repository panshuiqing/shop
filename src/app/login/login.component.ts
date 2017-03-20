import { Component, OnInit, Input, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'ax-login',
  template: require('./login.component.html')
})
export class LoginComponent implements OnInit {

  @Input()
  rememberMe: boolean;

  @Input()
  loginName: string = '';

  @Input()
  password: string = '';

  @Input()
  msgs: Message[] = [];

  constructor(private loginService: LoginService, private route: Router, private app: ApplicationRef) { }

  ngOnInit() {
    let savedUser = this.loginService.loadSavedUser();
    if (savedUser != null && savedUser.rememberMe) {
      this.loginName = savedUser.loginName;
      this.password = savedUser.password;
      this.rememberMe = savedUser.rememberMe;
    }
  }

  logOn() {
    let that = this;
    this.loginService.logOn({ loginName: this.loginName, password: this.password, rememberMe: this.rememberMe })
      .then(result => {
        if (result.valid) {
          that.route.navigate(['/home']);
        }
        else {
          that.msgs = [];
          that.msgs.push({ severity: 'error', summary: '错误提示', detail: result.message });
          that.app.tick();
        }
      });
  }

  forgetPassword(event: UIEvent){
    event.preventDefault();
    event.stopPropagation();
    this.route.navigate(['/reset-password']);
  }
}