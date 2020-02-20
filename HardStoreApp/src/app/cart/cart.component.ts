import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/models/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  passProductInfo: Product;
  addedProducts: Array<string> = [];
  quantityToBuy: number = 1;
  itemsInCart: any;
  totalSum: number;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    // this.productService.currentPassProductInfo
    //   .subscribe(passProductInfo => {
    //     this.passProductInfo = passProductInfo;
    //     this.addedProducts.push(passProductInfo);
    //     console.log(this.addedProducts);
    //   });

    this.itemsInCart = sessionStorage.getItem('itemsInCart');
    this.addedProducts = JSON.parse(this.itemsInCart);
  }

  checkOut(quantityToBuy, product: Product) {
    console.log(product);
    
    product.quantity -= quantityToBuy;
    this.productService.editProduct(product);
  }

  removeFromCart() {
    sessionStorage.removeItem('itemsInCart');
  }

}
