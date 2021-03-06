import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductComponent } from './product/product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ShortenPipe } from './shorten.pipe';
import { Ng2SearchPipeModule } from 'node_modules/ng2-search-filter/ng2-search-filter';

@NgModule({
  declarations: [
    AddProductComponent,
    UpdateProductComponent,
    AllProductsComponent,
    FeaturedProductsComponent,
    ProductComponent,
    DetailsProductComponent,
    ShortenPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    AddProductComponent,
    FeaturedProductsComponent
  ]
})
export class ProductsModule { }
