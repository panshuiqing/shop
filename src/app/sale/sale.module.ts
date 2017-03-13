import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

import { SaleComponent } from './sale.component';

@NgModule({
  imports: [FormsModule, InputTextModule, ButtonModule],
  declarations: [SaleComponent],
  exports: []
})
export class SaleModule {

}