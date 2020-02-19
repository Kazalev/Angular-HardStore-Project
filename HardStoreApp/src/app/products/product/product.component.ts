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
  passProductInfo: any;

  constructor(
    private productService: ProductsService,
    private userService: AuthService) { }

  ngOnInit() {
    this.productService.currentPassProductInfo.subscribe(passProductInfo => this.passProductInfo = passProductInfo);

    this.userService.getUserState()
      .subscribe(user => {
        this.user = user;
      });

    // this.userService.getUsers().subscribe(user => {
    //   user.forEach(user => {
    //     console.log(user.role)
    //   });
    // });

  }

  updateProduct(event, product: Product) {
    this.updateState = true;
    this.productToUpdate = product;
  }

  editProduct(product: Product) {
    this.productService.editProduct(product);
    this.clearState();
  }

  productDetails(passProductInfo) {
    this.productService.changeMessage(passProductInfo)
  }

  clearState() {
    this.updateState = false;
    this.productToUpdate = null;
  }

  deleteProduct(event, product: Product) {
    this.productService.deleteProduct(product);
  }

  addToCart(passProductInfo: Product) {
    this.productService.changeMessage(passProductInfo);
  }

  newProductInfo(passProductInfo) {
    this.productService.changeMessage(passProductInfo);
  }

  // showToaster(){
  //   this.toastr.success('Added to Cart');
  // }
}
