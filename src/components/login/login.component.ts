import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'login',
    styles: ['login.component.css'],
    templateUrl: 'login.component.html',
    providers: [LoginService, HttpModule]
})
export class LoginComponent { 

    form: FormGroup;

    constructor(
        private _router: Router,
        public fb: FormBuilder,
        private _loginService: LoginService,
        private _flashMessagesService: FlashMessagesService) {
        this.form = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }


    login(user: any) {
        let dadScope = this;
        this._loginService.login(user)
            .subscribe(function(res) {
                if(res.success == true) {
                    localStorage.setItem('user', res.token);
                    dadScope._router.navigate(['']);
                } else {
                    dadScope._flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 30000 });
                }
            });
    }
}
