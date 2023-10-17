import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainInvoiceComponent } from './components/main-invoice/main-invoice.component';
import { ListInvoiceComponent } from './components/list-invoice/list-invoice.component';
import { AppRoutingModule } from './app-routing.module';
import { InvoiceComponent } from './components/invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInvoiceComponent,
    ListInvoiceComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
