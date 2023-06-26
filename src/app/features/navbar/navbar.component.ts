import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  @Input() username: string = '';

  navigateTo(route: string) {
    this.router.navigate([route], { queryParams: { username: this.username } });
  }
  
}