import { Component } from '@angular/core';
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
    loginService.logined = false;
  }
}
