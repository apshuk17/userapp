import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { User } from './user';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  @Output() userData = new EventEmitter();

  onSave(user: User) {
    const headers: Headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('https://user-app-d9f36.firebaseio.com/userdata.json',
                      user, {headers: headers});
  }

  getUsers() {
    return this.http.get('https://user-app-d9f36.firebaseio.com/userdata.json')
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
  }

}
