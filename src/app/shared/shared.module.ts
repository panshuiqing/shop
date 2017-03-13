import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [FormsModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class SharedModule {

}