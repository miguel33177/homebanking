import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router: Router, private _location: Location) {}
  email!: string;
  username!: string;
  password!: string;
  confirmPassword!: string;
  phoneNumber!: string;
  birthDate!: string;

  register() {
    console.log(this.username);
    if (this.email && this.username && this.password && this.confirmPassword && this.phoneNumber && this.birthDate) {
      if (this.password === this.confirmPassword) {
        alert('Registration successful!');
        this.router.navigate(['/main']);
      } else {
        alert('Passwords do not match!');
      }
    } else {
      alert('All fields are required!');
    }
  }
  toBack(){
      this._location.back();
  }
}
