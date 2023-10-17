import { Component } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice.model';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css'],
})
export class ListInvoiceComponent {
  constructor(private invoiceService: InvoiceService) {}
  invoices: Invoice[] = this.invoiceService.getInvoices();
}
