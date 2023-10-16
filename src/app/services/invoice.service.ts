import { Injectable } from '@angular/core';
import { Invoice } from '../models/Invoice.model';
const invoices = [
  new Invoice(1, 120, 10, '2021-12-12', true),
  new Invoice(2, 1020, 90, '2020-12-22', true),
  new Invoice(3, 260, 30, '2020-10-18', false),
  new Invoice(4, 450, 40, '2020-12-14', true),
];
@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor() {}

  getInvoices(): Invoice[] {
    return invoices;
  }

  getInvoice(id: number): Invoice {
    return invoices.find((invoice) => invoice.idFacture === id)!;
  }
}
