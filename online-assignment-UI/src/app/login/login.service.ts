import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    loginURL = 'http://localhost:8080/login';
    constructor(private http: Http) {}

    login(userModel) {
        return this.http.post(this.loginURL, userModel);
    }

}
