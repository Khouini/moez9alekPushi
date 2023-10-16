import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from 'src/app/models/Invoice.model';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-invoice',
  templateUrl: './main-invoice.component.html',
  styleUrls: ['./main-invoice.component.css'],
})
export class MainInvoiceComponent {
  invoice: Invoice = {} as Invoice;
  invoiceIsActive: boolean = false;
  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService
  ) {
    const id = Number(this.activated.snapshot.params['id']);
    const active = this.activated.snapshot.params['active'];
    console.log(
      '🚀 ~ file: main-invoice.component.ts:21 ~ MainInvoiceComponent ~ active:',
      active
    );
    this.invoiceIsActive = active === 'true' ? true : false;
    this.invoice = this.invoiceService.getInvoice(id);
  }
}
