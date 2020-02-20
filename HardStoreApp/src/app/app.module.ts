import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { CartComponent } from './cart/cart.component';
import { LinkGuardGuard } from './guards/link-guard.guard';
import { ProductTDComponent } from './cart/product-td/product-td.component';
import { Ng2SearchPipeModule } from 'node_modules/ng2-search-filter/ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    FavoritesComponent,
    CartComponent,
    ProductTDComponent,
  ],
  imports: [
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot(), // ToastrModule added
    BrowserModule,
    AuthModule,
    CoreModule,
    FormsModule,
    UserModule,
    HomeModule,
    ProductsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    Ng2SearchPipeModule,
  ],
  providers: [LinkGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
