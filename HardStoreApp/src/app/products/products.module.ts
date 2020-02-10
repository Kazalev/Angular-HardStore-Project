import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AllProductsComponent } from './all-products/all-products.component';



@NgModule({
  declarations: [AddProductComponent, UpdateProductComponent, AllProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AddProductComponent
  ]
})
export class ProductsModule { }
