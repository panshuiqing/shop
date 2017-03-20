import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, CheckboxModule, GrowlModule, DialogModule } from 'primeng/primeng';

import { LoginComponent } from './login.component';
import { ResetPasswordComponent } from './reset-password.component';

@NgModule({
  imports: [FormsModule, InputTextModule, ButtonModule, CheckboxModule, GrowlModule, DialogModule],
  declarations: [LoginComponent, ResetPasswordComponent],
  exports: []
})
export class LoginModule {

}