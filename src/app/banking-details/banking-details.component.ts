// src/app/banking-details/banking-details.component.ts
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvoiceDataService } from '../invoice-data.service';

@Component({
  selector: 'app-banking-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './banking-details.component.html',
  styleUrls: ['./banking-details.component.scss']
})
export class BankingDetailsComponent implements OnInit {
  bankName: string = '';
  accountNumber: string = '';
  ifscCode: string = '';
  branch: string = '';
  upiId: string = '';

  constructor(private invoiceDataService: InvoiceDataService) {}

  ngOnInit() {
    this.invoiceDataService.invoiceData$.subscribe(data => {
      this.bankName = data.bankName;
      this.accountNumber = data.accountNumber;
      this.ifscCode = data.ifscCode;
      this.branch = data.branch;
      this.upiId = data.upiId;
    });
  }

  onInputChange() {
    this.invoiceDataService.updateInvoiceData({
      bankName: this.bankName,
      accountNumber: this.accountNumber,
      ifscCode: this.ifscCode,
      branch: this.branch,
      upiId: this.upiId
    });
  }
}