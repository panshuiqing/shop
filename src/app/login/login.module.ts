import { NgModule } from '@angular/core';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [InputTextModule, ButtonModule],
  declarations: [LoginComponent],
  exports: []
})
export class LoginModule {

}