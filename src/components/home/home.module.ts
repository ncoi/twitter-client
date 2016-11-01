import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import routes from './home.routes';

@NgModule({
    imports: [CommonModule, routes],
    declarations: [HomeComponent],
    providers: []
})
export default class LoginModule {}