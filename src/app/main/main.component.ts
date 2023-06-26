import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  
})
export class MainComponent implements OnInit, AfterViewInit {
  username: string = '';
  depositForm!: FormGroup;
  withdrawForm!: FormGroup;
  errorMessageAdd: string = '';
  successMessageAdd: string = '';
  errorMessageWithdraw: string = '';
  successMessageWithdraw: string = '';
  transactions: any[] = [];
  balance: number = 0;

  

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}


  ngOnInit(): void {
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

    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  addTransaction(type: string, amount: number, date: Date) {
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

    this.transactions.push(transaction);
    this.dataSource.data = this.transactions;
  }

  depositFunds() {
    if (this.depositForm.valid) {
      const amount = parseInt(this.depositForm.value.amount, 10);
      let date = new Date();

      this.addTransaction('Deposit', amount, date);
      this.balance += amount;

      alert('Funds added successfully!');
    } else {
      alert('Please enter a valid amount.');
    }
  }

  withdrawFunds() {
    if (this.withdrawForm.valid) {
      const amount = parseInt(this.withdrawForm.value.amount, 10);
      let date = new Date();

      this.addTransaction('Withdraw', -amount, date);
      this.balance -= amount;

      alert('Funds withdraw successfully!');
    } else {
      alert('Please enter a valid amount.');
    }
  }

  displayedColumns: string[] = ['type', 'amount', 'date'];
  dataSource = new MatTableDataSource(this.transactions);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
