import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    constructor(
        private _router: Router,
        private http: Http
    ) { }

    private URLBE: string = `http://localhost:8000`;
    private URL_login: string = `${this.URLBE}/users/login`;
    private URL_register: string = `${this.URLBE}/users/register`;
    //private URL_signup: string = `${this.URLBE}/signup`;

    login(user: any): Observable<any> {
        return this.http.post(this.URL_login, user)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json()));
    }

    logout() {
        // localStorage.setItem('loggedIn', JSON.stringify(false));
        // this._router.navigate(['login']);
    }

    register(user: any): Observable<any> {
        return this.http.post(this.URL_register, user)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json()));
    }
}