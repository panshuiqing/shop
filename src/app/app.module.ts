import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginService } from './service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }