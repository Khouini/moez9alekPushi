// ng generate module app-routing --flat --module=app

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'invoice',
    loadChildren: () =>
      import('./feautures/invoice/invoice.module').then((m) => m.InvoiceModule),
  },

  // { path: '', redirectTo: '/invoice/list', pathMatch: 'full' },
  // { path: '**', redirectTo: '/invoices' },
];

@NgModule({
  // declarations: [],
  // imports: [CommonModule],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
