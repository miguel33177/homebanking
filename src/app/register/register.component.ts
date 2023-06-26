import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

function passwordMatch(password: string, confirmPassword: string): boolean {
  return password === confirmPassword;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  registerForm!:FormGroup;
  errorMessage: string = ''; 
  passwordErrorMessage: string = ''; 
  constructor(private router: Router, private _location: Location, private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])], 
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthDate: ['', Validators.required]   
    });
  }
  register() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;

     if (this.registerForm.valid) {
      if (passwordMatch(password, confirmPassword)) {
        alert('Registration successful!');
        this.router.navigate(['/main']);
      } else {
        this.passwordErrorMessage = 'Passwords does not match!';
      }
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }
  
  toBack(){
      this._location.back();
  }
}
