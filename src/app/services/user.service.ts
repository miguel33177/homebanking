import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string = '';

  setUsername(username: string) {
    this.username = username;
  }
}
