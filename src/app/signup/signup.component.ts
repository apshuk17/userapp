import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Response } from '@angular/http';

@Component({
  selector: 'ua-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title: String = 'SignUp';

  genders: String[] = ['male', 'female'];


  reactiveForm: FormGroup;

  constructor(private userService: UserService) {}

  ngOnInit() {

    this.reactiveForm = new FormGroup({
    'username': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'password': new FormControl(null, [Validators.required]),
    'confirm-password': new FormControl(null, [Validators.required]),
    'gender' : new FormControl('male', [Validators.required])
  }, this.onConfirmPassword);

}
  
  onConfirmPassword(group: FormGroup): {[s: string]: boolean} {
    return group.get('confirm-password').value === group.get('password').value ? null : {'passwordMatch': true};
  }

  onSubmit() {
    //console.log(this.reactiveForm);
    const user = new User(this.reactiveForm.get('username').value,
                          this.reactiveForm.get('password').value,
                          this.reactiveForm.get('email').value,
                          this.reactiveForm.get('gender').value);
    this.userService.onSave(user).subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

}
