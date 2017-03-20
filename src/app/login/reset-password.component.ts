import { Component, OnInit, Input, ApplicationRef } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'ax-reset-pwd',
  template: require('./reset-password.component.html')
})
export class ResetPasswordComponent implements OnInit {

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
    }
  }

  confirm() {
    let that = this;
    this.loginService.resetPassword(this.loginName, this.password)
      .then(result => {
        if (result.valid) {
          that.msgs = [];
          that.msgs.push({ severity: 'info', summary: '信息提示', detail: '密码重置成功' });
          setTimeout(() => { this.route.navigate(['/login']); }, 1000);
          that.app.tick();
        }
        else {
          that.msgs = [];
          that.msgs.push({ severity: 'error', summary: '错误提示', detail: result.message });
          that.app.tick();
        }
      });
  }

  cancel() {
    this.route.navigate(['/login']);
  }
}