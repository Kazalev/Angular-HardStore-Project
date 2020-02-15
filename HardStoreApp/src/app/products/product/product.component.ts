import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from '../services/products.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  user: firebase.User;
  @Input('product')
  product: Product;
  updateState: boolean = false;
  productToUpdate: Product;
  message: any;

  constructor(
      private productService: ProductsService,
      private userService: AuthService) { }

  ngOnInit() {
    this.productService.currentMessage.subscribe(message => this.message = message);

    this.userService.getUserState()
      .subscribe(user => {
        this.user = user;
      });
  }

  updateProduct(event, product: Product) {
    this.updateState = true;
    this.productToUpdate = product;
  }

  editProduct(product: Product){
    this.productService.editProduct(product);
    this.clearState();
  }

  productDetails(event, product: Product){
    console.log(product);
  }

  clearState(){
    this.updateState = false;
    this.productToUpdate = null;
  }
  
  deleteProduct(event, product: Product) {
    this.productService.deleteProduct(product);
  }

  clickButton() {
  }

  newMessage(message){
    this.productService.changeMessage(message);
  }

}
