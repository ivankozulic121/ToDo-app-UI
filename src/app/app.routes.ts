import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuardGuard } from './auth-guard.guard';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate:[authGuardGuard]
    },
    {
      path: 'login',
      component: LoginComponent,
      
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    /*{
      path: '**',
      pathMatch: 'full',
      redirectTo: ''
    }*/
  ];
