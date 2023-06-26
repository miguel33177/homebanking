import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  username: string = '';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
   this.route.queryParams.subscribe(params => {
     this.username = params['username'];
   });
 }
}
