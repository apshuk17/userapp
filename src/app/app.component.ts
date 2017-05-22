import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ua-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'SignIn';

  constructor(private router: Router) {}

  onRegister() {
    this.router.navigate(['/signup']);
    this.title = 'SignUp';
  }

  ngOnInit() {}
}
