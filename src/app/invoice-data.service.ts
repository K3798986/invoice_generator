// src/app/invoice-data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface InvoiceItem {
  description: string;
  hsn: number;       // HSN Code
  quantity: number;
  price: number;
  gstper: number;    // GST Percentage
  gstamt: number;    // GST Amount
}

export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  senderName: string;
  senderAddress: string;
  senderPhone: string;
  senderEmail: string;
  recipientName: string;
  recipientAddress: string;
  recipientPhone: string;
  recipientEmail: string;
  items: InvoiceItem[];
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  branch: string;
  upiId: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {
  private invoiceData = new BehaviorSubject<InvoiceData>({
    invoiceNumber: '',
    invoiceDate: '',
    senderName: '',
    senderAddress: '',
    senderPhone: '',
    senderEmail: '',
    recipientName: '',
    recipientAddress: '',
    recipientPhone: '',
    recipientEmail: '',
    items: [],
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    branch: '',
    upiId: '',
    notes: ''
  });

  invoiceData$ = this.invoiceData.asObservable();

  updateInvoiceData(data: Partial<InvoiceData>) {
    const currentData = this.invoiceData.getValue();
    this.invoiceData.next({ ...currentData, ...data });
  }

  getInvoiceData(): InvoiceData {
    return this.invoiceData.getValue();
  }
}