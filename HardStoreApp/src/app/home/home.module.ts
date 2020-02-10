import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './landing/home.component';
import { FeaturedProductsComponent } from '../products/featured-products/featured-products.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, FeaturedProductsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    FeaturedProductsComponent
  ]
})
export class HomeModule { }
