import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
    {path: '', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'user', component: UserComponent}
    ];

export const routing = RouterModule.forRoot(APP_ROUTES);