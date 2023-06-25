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
    if (this.username == 'ola' && this.password == 'ola') {
      alert('Login bem-sucedido!');
      this.router.navigate(['/main']); // Redirecionar para a rota '/main'
    } else {
      alert('Nome de usuário ou senha inválidos!');
    }
  }
}
