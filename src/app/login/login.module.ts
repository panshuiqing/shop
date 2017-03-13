import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [FormsModule, InputTextModule, ButtonModule, LoginRoutingModule],
  declarations: [LoginComponent]
})
export class LoginModule {

}