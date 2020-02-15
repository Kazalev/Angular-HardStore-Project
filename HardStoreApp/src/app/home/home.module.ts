import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './landing/home.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from '../products/products.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProductsModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
