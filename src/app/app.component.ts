// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { SenderRecipientComponent } from './sender-recipient/sender-recipient.component';
import { InvoiceItemsComponent } from './invoice-items/invoice-items.component';
import { BankingDetailsComponent } from './banking-details/banking-details.component';
import { AdditionalNotesComponent } from './additional-notes/additional-notes.component';
import { InvoiceDataService, InvoiceItem } from './invoice-data.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    InvoiceDetailsComponent,
    SenderRecipientComponent,
    InvoiceItemsComponent,
    BankingDetailsComponent,
    AdditionalNotesComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private invoiceDataService: InvoiceDataService) {}

  printInvoice() {
    window.print();
  }

  generatePDF() {
    const data = this.invoiceDataService.getInvoiceData();
    const doc = new jsPDF();

    // Title
    doc.setFontSize(20);
    doc.text('Invoice', 10, 10);
    doc.setFontSize(12);
    doc.text('Invoicing Simplified', 10, 20);

    // Invoice Details
    doc.setFontSize(16);
    doc.text('Invoice Details', 10, 40);
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${data.invoiceNumber}`, 10, 50);
    doc.text(`Date: ${data.invoiceDate}`, 10, 60);

    // Sender and Recipient
    doc.setFontSize(16);
    doc.text('From (Sender)', 10, 80);
    doc.setFontSize(12);
    doc.text(`Name: ${data.senderName}`, 10, 90);
    doc.text(`Address: ${data.senderAddress}`, 10, 100);
    doc.text(`Phone: ${data.senderPhone}`, 10, 110);
    doc.text(`Email: ${data.senderEmail}`, 10, 120);

    doc.setFontSize(16);
    doc.text('To (Recipient)', 100, 80);
    doc.setFontSize(12);
    doc.text(`Name: ${data.recipientName}`, 100, 90);
    doc.text(`Address: ${data.recipientAddress}`, 100, 100);
    doc.text(`Phone: ${data.recipientPhone}`, 100, 110);
    doc.text(`Email: ${data.recipientEmail}`, 100, 120);

    // Invoice Items
    doc.setFontSize(16);
    doc.text('Invoice Items', 10, 140);
    doc.setFontSize(12);
    let y = 150;
    doc.text('SL No | Description | HSN Code | Quantity | Price (₹) | GST % | GST Amt | Amount (₹)', 10, y);
    y += 10;
    data.items.forEach((item: InvoiceItem, index: number) => {
      const amount = (item.quantity * item.price) + item.gstamt;
      doc.text(
        `${index + 1} | ${item.description} | ${item.hsn} | ${item.quantity} | ${item.price} | ${item.gstper} | ${item.gstamt} | ${amount}`,
        10,
        y
      );
      y += 10;
    });
    const total = data.items.reduce((sum, item) => sum + (item.quantity * item.price) + item.gstamt, 0);
    doc.text(`Total: ₹${total}`, 10, y);

    // Banking Details
    y += 20;
    doc.setFontSize(16);
    doc.text('Banking Details', 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(`Bank Name: ${data.bankName}`, 10, y);
    y += 10;
    doc.text(`Account Number: ${data.accountNumber}`, 10, y);
    y += 10;
    doc.text(`IFSC Code: ${data.ifscCode}`, 10, y);
    y += 10;
    doc.text(`Branch: ${data.branch}`, 10, y);
    y += 10;
    doc.text(`UPI ID: ${data.upiId}`, 10, y);

    // Additional Notes
    y += 20;
    doc.setFontSize(16);
    doc.text('Additional Notes', 10, y);
    y += 10;
    doc.setFontSize(12);
    doc.text(data.notes, 10, y);

    // Save the PDF
    doc.save('invoice.pdf');
  }
}