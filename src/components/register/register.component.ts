import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { HttpModule } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html',
    providers: [LoginService, HttpModule]
})
export class RegisterComponent { 
    form: FormGroup;

    constructor(
        private _router: Router,
        public fb: FormBuilder,
        private _loginService: LoginService,
        private _flashMessagesService: FlashMessagesService) {
        this.form = this.fb.group({
            fullname: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    register(user: any) {
        let dadScope = this;
        this._loginService.register(user)
            .subscribe(function(res) {
                if(res.success == true) {
                    dadScope._router.navigate(['login']);
                } else {
                    dadScope._flashMessagesService.show(res.msg, { cssClass: 'alert-danger', timeout: 30000 });
                }
            });
    }
}
