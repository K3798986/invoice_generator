// src/app/invoice-details/invoice-details.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceDataService } from '../invoice-data.service';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  invoiceNumber: string = '';
  invoiceDate: string = '';

  constructor(private invoiceDataService: InvoiceDataService) {}

  ngOnInit() {
    this.invoiceDataService.invoiceData$.subscribe(data => {
      this.invoiceNumber = data.invoiceNumber;
      this.invoiceDate = data.invoiceDate;
    });
  }

  onInputChange() {
    this.invoiceDataService.updateInvoiceData({
      invoiceNumber: this.invoiceNumber,
      invoiceDate: this.invoiceDate
    });
  }
}