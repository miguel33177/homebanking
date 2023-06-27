import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';
  loginFailed: string = '';

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
     // Initialize the login form with required fields and validators
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
      // Check if the form is valid
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      
      // Check if the username and password match the expected values
      if (username === 'bruno' && password === 'password') {
        alert('Login successful!');
        // Create a NavigationExtras object to pass additional parameters via query parameters
        const navigationExtras: NavigationExtras = {
          queryParams: { username: username } 
        };
        // Navigate to the '/main' route with the provided query parameters
        this.router.navigate(['/main'], navigationExtras);
       
      } else {
        this.loginFailed = 'Invalid username or password!';
      }
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }
}
