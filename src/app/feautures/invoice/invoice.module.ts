import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';

@NgModule({
  declarations: [MainInvoiceComponent, InvoiceComponent, ListInvoiceComponent],
  imports: [CommonModule, InvoiceRoutingModule],
})
export class InvoiceModule {}
