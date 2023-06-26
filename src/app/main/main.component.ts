import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
 username: string = '';

 constructor(private route: ActivatedRoute, private userService: UserService) {}
 ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.username = params['username'];
  });
  this.userService.setUsername(this.username);
  console.log(this.userService.username);
}
}




 




