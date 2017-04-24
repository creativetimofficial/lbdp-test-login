import { Routes } from '@angular/router';
//
// import { NotFoundComponent } from './not-found/not-found.component';
// import { ErrorComponent } from './error/error.component';
// import { ForgotComponent } from './forgot/forgot.component';
// import { LockscreenComponent } from './lockscreen/lockscreen.component';
// import { SigninComponent } from './signin/signin.component';
import { UserComponent } from './userpage/user.component';
import { LoginComponent } from './login/login.component';

export const PagesRoutes: Routes = [
  
{
  path: '',
  children: [ {
    path: 'login',
    component: LoginComponent
  }]
}
];
