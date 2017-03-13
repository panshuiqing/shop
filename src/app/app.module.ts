import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageNotFoundComponent } from './404.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './service/login.service';

@NgModule({
  imports: [
    BrowserModule,  AppRoutingModule
  ],
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
