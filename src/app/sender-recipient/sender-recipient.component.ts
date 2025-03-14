// src/app/sender-recipient/sender-recipient.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceDataService } from '../invoice-data.service';

@Component({
  selector: 'app-sender-recipient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sender-recipient.component.html',
  styleUrls: ['./sender-recipient.component.scss']
})
export class SenderRecipientComponent implements OnInit {
  senderName: string = '';
  senderAddress: string = '';
  senderPhone: string = '';
  senderEmail: string = '';
  recipientName: string = '';
  recipientAddress: string = '';
  recipientPhone: string = '';
  recipientEmail: string = '';

  constructor(private invoiceDataService: InvoiceDataService) {}

  ngOnInit() {
    this.invoiceDataService.invoiceData$.subscribe(data => {
      this.senderName = data.senderName || '';
      this.senderAddress = data.senderAddress || '';
      this.senderPhone = data.senderPhone || '';
      this.senderEmail = data.senderEmail || '';
      this.recipientName = data.recipientName || '';
      this.recipientAddress = data.recipientAddress || '';
      this.recipientPhone = data.recipientPhone || '';
      this.recipientEmail = data.recipientEmail || '';
    });
  }

  onInputChange() {
    console.log('Updating Sender/Recipient Data:', {
      senderName: this.senderName,
      senderAddress: this.senderAddress,
      senderPhone: this.senderPhone,
      senderEmail: this.senderEmail,
      recipientName: this.recipientName,
      recipientAddress: this.recipientAddress,
      recipientPhone: this.recipientPhone,
      recipientEmail: this.recipientEmail
    }); // Debug log
    this.invoiceDataService.updateInvoiceData({
      senderName: this.senderName,
      senderAddress: this.senderAddress,
      senderPhone: this.senderPhone,
      senderEmail: this.senderEmail,
      recipientName: this.recipientName,
      recipientAddress: this.recipientAddress,
      recipientPhone: this.recipientPhone,
      recipientEmail: this.recipientEmail
    });
  }
}