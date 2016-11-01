import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import routes from './login.routes';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [CommonModule, routes, FormsModule, ReactiveFormsModule, HttpModule, FlashMessagesModule],
    declarations: [LoginComponent],
    providers: []
})
export default class LoginModule {}