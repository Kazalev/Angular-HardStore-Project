import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  passProductInfo: any;
  addedProducts: Array<string> = [];
  quantityToBuy: number = 1;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.currentPassProductInfo
      .subscribe(passProductInfo => {
        this.passProductInfo = passProductInfo;
        this.addedProducts.push(passProductInfo);
        console.log(this.addedProducts);
        
      });
  }

  checkOut(quantityToBuy, product: Product){
    product.quantity -= quantityToBuy;
    this.productService.editProduct(product);
  }

}
