// ng generate module app-routing --flat --module=app

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListInvoiceComponent } from './components/list-invoice/list-invoice.component';
import { MainInvoiceComponent } from './components/main-invoice/main-invoice.component';

const routes: Routes = [
  { path: 'invoices', component: ListInvoiceComponent },
  // { path: 'invoice/:id/:active', component: MainInvoiceComponent },
  { path: 'invoice', component: MainInvoiceComponent },
  { path: '', redirectTo: '/invoices', pathMatch: 'full' },
  { path: '**', redirectTo: '/invoices' },
];

@NgModule({
  // declarations: [],
  // imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
