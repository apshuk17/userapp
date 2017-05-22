import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ua-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  title: String = 'SignIn';

  signInForm: FormGroup;

  presentUsers: {[key: string]: string}[] = [];

  currentUser: {[key: string]: string};

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.signInForm = new FormGroup(
      {
        'email': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required)
      }
    );
  }

  onSubmit() {
    
    this.userService.getUsers().subscribe(
      (result) => {
        for (let key in result) {
          this.presentUsers.push(result[key]);
        }
        for (let user in result) {
          if(result[user]['email'] === this.signInForm.get('email').value && result[user]['password'] === this.signInForm.get('password').value) {
              this.currentUser = result[user];
              this.userService.userData.emit(this.currentUser);
              this.router.navigate(['/user']);
              break;
            }
          }
      }
    );
    // if(this.currentUser) {
    //   this.userService.userData.emit(this.currentUser);
    //   this.router.navigate(['/user']);
    // }
  }

}
