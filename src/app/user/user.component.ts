import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'ua-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  userData: {[key: string]: string};

  ngOnInit() {
    console.log('loaded');
    this.userService.userData.subscribe(
      (result) => {
        this.userData = result;
        console.log(result);
      }
    );
  }

}
