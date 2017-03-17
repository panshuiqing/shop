import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule, CheckboxModule, GrowlModule } from 'primeng/primeng';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [FormsModule, InputTextModule, ButtonModule, CheckboxModule, GrowlModule],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule {

}