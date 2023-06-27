import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Function to check if passwords match
function passwordMatch(password: string, confirmPassword: string): boolean {
  return password === confirmPassword;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  registerForm!:FormGroup; // Form group for registration form
  errorMessage: string = ''; // Error message for required fields
  passwordErrorMessage: string = ''; // Error message for password mismatch
  constructor(
    private router: Router, // Angular router for navigation
    private _location: Location, // Angular location service for browser history
    private formBuilder: FormBuilder // Angular form builder for creating the form
    ) {}


  ngOnInit(): void {
     // Initialize the registration form with validators
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

     if (this.registerForm.valid) {  // Check if the form is valid
      if (passwordMatch(password, confirmPassword)) {  // Check if passwords match
        alert('Registration successful!');
        this.router.navigate(['/main']); // Navigate to '/main' route on successful registration
      } else {
        this.passwordErrorMessage = 'Passwords does not match!';
      }
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }
  
  toBack(){
      this._location.back(); // Go back to previous page using location service
  }
}
