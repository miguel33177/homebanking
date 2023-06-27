import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit {
  username: string = '';
  depositForm!: FormGroup;
  withdrawForm!: FormGroup;
  transactions: any[] = [];
  balance: number = 0;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Initialize deposit and withdraw forms with validation
    this.depositForm = this.formBuilder.group({
      amount: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });

    this.withdrawForm = this.formBuilder.group({
      amount: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
      ],
    });

    // Retrieve username from query params
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  addTransaction(type: string, amount: number, date: Date) {
    // Create a transaction object
    const transaction = {
      type: type,
      amount: amount,
      date:
        date.getDate().toString().padStart(2, '0') +
        '-' +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        '-' +
        date.getFullYear() +
        ' ' +
        date.getHours().toString().padStart(2, '0') +
        ':' +
        date.getMinutes().toString().padStart(2, '0') +
        ':' +
        date.getSeconds().toString().padStart(2, '0'),
    };

    // Add transaction to the transactions array
    this.transactions.push(transaction);
    this.dataSource.data = this.transactions;
  }

  depositFunds() {
    if (this.depositForm.valid) {
      const amount = parseInt(this.depositForm.value.amount, 10);
      let date = new Date();

      // Add deposit transaction and update balance
      this.addTransaction('Deposit', amount, date);
      this.balance += amount;

      alert('Funds added successfully!');
    } else {
      alert('Please enter a valid amount.');
    }
  }

  withdrawFunds() {
    if (this.withdrawForm.valid) {
      if (this.balance != 0) {
        const amount = parseInt(this.withdrawForm.value.amount, 10);
        let date = new Date();

        // Add withdraw transaction and update balance
        this.addTransaction('Withdraw', -amount, date);
        this.balance -= amount;
        alert('Funds withdraw successfully!');
      }else{
        alert("No funds available!")
      }
    } else {
      alert('Please enter a valid amount.');
    }
  }

  displayedColumns: string[] = ['type', 'amount', 'date'];
  dataSource = new MatTableDataSource(this.transactions);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    // Set the paginator for the table data source
    this.dataSource.paginator = this.paginator;
  }
}
