import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Providers } from './service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule, SharedModule, AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [...Providers],
  bootstrap: [AppComponent]
})
export class AppModule { }