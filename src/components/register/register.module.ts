import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { HttpModule } from '@angular/http';
import routes from './register.routes';
import { FlashMessagesModule } from 'angular2-flash-messages';

@NgModule({
    imports: [CommonModule, routes, ReactiveFormsModule, HttpModule, FlashMessagesModule],
    declarations: [RegisterComponent],
    providers: []
})
export default class RegisterModule {}