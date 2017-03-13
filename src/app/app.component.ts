import { Component } from '@angular/core';
import '../assets/css/site.css';
import { LoginService } from './service/login.service';

@Component({
  selector: 'ax-app',
  template: require('./app.component.html')
})
export class AppComponent {
  get logined(): boolean {
    return this.loginService.logined;
  }

  constructor(private loginService: LoginService){
    console.log("app before " + loginService.logined);
    loginService.logined = false;
    console.log("app after " + loginService.logined);
  }
}
