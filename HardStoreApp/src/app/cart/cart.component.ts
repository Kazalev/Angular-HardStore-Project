import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products/services/products.service';
import { Product } from '../products/models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  addedProducts: Array<string> = [];
  quantityToBuy: number = 1;
  itemsInCart: any;
  product: Product;

  constructor(
      private productService: ProductsService,
      private router: Router) { }

  ngOnInit() {
    // this.productService.currentPassProductInfo
    //   .subscribe(passProductInfo => {
    //     this.passProductInfo = passProductInfo;
    //     this.addedProducts.push(passProductInfo);
    //     console.log(this.addedProducts);
    //   });
    console.log(this.quantityToBuy);

    this.itemsInCart = sessionStorage.getItem('itemsInCart');
    this.addedProducts = JSON.parse(this.itemsInCart);
  }

  checkOut(quantityToBuy, addedProducts) {
    if(!addedProducts){
      alert();
    }
    console.log(addedProducts);
    addedProducts.forEach((product) => {
      console.log(product.quantity);  
      product.quantity -= quantityToBuy;
      this.productService.editProduct(product);
      sessionStorage.removeItem('itemsInCart');
    });
    // product.quantity -= quantityToBuy;
  }

  removeFromCart() {
    let isConfirmed = confirm('This will discharge all items in Cart! Are you Sure?');
    if(isConfirmed){
      sessionStorage.removeItem('itemsInCart');
      this.router.navigate(['/']);
    }
  }

}
