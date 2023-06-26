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
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      

      if (username === 'bruno' && password === 'password') {
        alert('Login successful!');
        const navigationExtras: NavigationExtras = {
          queryParams: { username: username } 
        };
        this.router.navigate(['/main'], navigationExtras);
       
      } else {
        this.loginFailed = 'Invalid username or password!';
      }
    } else {
      this.errorMessage = 'Please fill in all required fields!';
    }
  }
}
