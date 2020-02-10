import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/landing/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { AllProductsComponent } from './products/all-products/all-products.component';


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
        path: 'user/profile',
        component: ProfileComponent
    },
    {
        path: "addProduct",
        component: AddProductComponent
    },
    {
        path: "products",
        component: AllProductsComponent
    },
    {
        path: "updateProduct/:id",
        component: UpdateProductComponent
    },
    {
        path: '**', // In case of no match of above go to NotFound Page
        component: NotFoundComponent
    }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
