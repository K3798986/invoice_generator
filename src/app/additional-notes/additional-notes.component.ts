// src/app/additional-notes/additional-notes.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceDataService } from '../invoice-data.service';

@Component({
  selector: 'app-additional-notes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './additional-notes.component.html',
  styleUrls: ['./additional-notes.component.scss']
})
export class AdditionalNotesComponent implements OnInit {
  notes: string = '';

  constructor(private invoiceDataService: InvoiceDataService) {}

  ngOnInit() {
    this.invoiceDataService.invoiceData$.subscribe(data => {
      this.notes = data.notes;
    });
  }

  onInputChange() {
    this.invoiceDataService.updateInvoiceData({ notes: this.notes });
  }
}