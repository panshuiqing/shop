import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [FormsModule, InputTextModule, ButtonModule],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule {

}