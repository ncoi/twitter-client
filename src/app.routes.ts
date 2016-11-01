import { RouterModule } from "@angular/router";


const routes = [
    { path: '', loadChildren: 'components/home/home.module'},
    { path: 'register', loadChildren: 'components/register/register.module'},
    { path: 'login', loadChildren: 'components/login/login.module' }
];


export default RouterModule.forRoot(routes);
