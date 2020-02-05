import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';


const routes: Routes = [
    
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: `user/profile`,
        component: ProfileComponent
    },
    {
        path: '**', // In case of no match of above go to NotFound Page
        component: NotFoundComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
