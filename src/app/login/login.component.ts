import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  username!: string;
  password!: string;

  login() {
    if (!this.username || !this.password) { //caso um dos inputs esteja vazio
      alert('Required fields!');
      return; // Sair do método login()
    } else if (this.username === 'ola' && this.password === 'ola') {
      alert('Login successful!');
      this.router.navigate(['/main']); // Redirecionar para a rota '/main'
    } else {
      alert('Invalid username or password!');
    }
  }
  
}
