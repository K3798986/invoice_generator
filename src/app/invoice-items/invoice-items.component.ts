// src/app/invoice-items/invoice-items.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceDataService, InvoiceItem } from '../invoice-data.service';

@Component({
  selector: 'app-invoice-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.scss']
})
export class InvoiceItemsComponent implements OnInit {
  items: InvoiceItem[] = [];

  constructor(private invoiceDataService: InvoiceDataService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.invoiceDataService.invoiceData$.subscribe(data => {
      this.items = data.items || [];
      this.cdr.detectChanges(); // Ensure UI updates
    });
  }

  addItem() {
    console.log('Adding new item...');
    const newItem: InvoiceItem = { description: '', hsn: 0, quantity: 0, price: 0, gstper: 0, gstamt: 0 };
    this.items.push(newItem);
    this.updateService();
    this.cdr.detectChanges(); // Force update
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.updateService();
    this.cdr.detectChanges(); // Force update
  }

  updateService() {
    console.log('Updating service with items:', this.items);
    this.items.forEach(item => {
      // Calculate GST Amount dynamically: (quantity * price * gstper) / 100
      item.gstamt = (item.quantity * item.price * item.gstper) / 100 || 0;
    });
    this.invoiceDataService.updateInvoiceData({ items: [...this.items] });
  }

  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.quantity * item.price) + item.gstamt, 0);
  }

  onInputChange() {
    this.updateService();
  }
}