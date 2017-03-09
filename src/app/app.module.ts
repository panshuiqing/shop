import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, InputTextModule, ButtonModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
