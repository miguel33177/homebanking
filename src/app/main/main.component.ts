import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
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
      date: date.getUTCDate(),
    };

    this.transactions.push(transaction);
  }
  
  depositFunds() {
    if (this.depositForm.valid) {
      const amount = parseInt(this.depositForm.value.amount, 10);
      let date = new Date();

      this.addTransaction('deposit', amount, date);
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

      this.addTransaction('withdraw', amount, date);
      this.balance -= amount;

      alert('Funds withdraw successfully!');
    } else {
      alert('Please enter a valid amount.');
    }
  }
}
