import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/models/products';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  
  product: Product = {
    name: 'Update item',
    category: '',
    description: 'This is updated !',
    imgURL: '',
    quantity: null,
    price: null
  }

  constructor( private productService: ProductsService ) { }

  ngOnInit() {
    console.log(this.product);
  }

  updateProduct(product){
    if(this.product.name != "" && this.product.description != ""){
      this.productService.updateProduct(this.product);
      this.product.name = '';
    }
  }
}
