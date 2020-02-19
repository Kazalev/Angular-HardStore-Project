import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/products';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  passProductInfo: any;
  user: firebase.User;
  
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private userService: AuthService) { }

  ngOnInit() {
    this.productService.currentPassProductInfo.subscribe(passProductInfo => this.passProductInfo = passProductInfo);

    this.userService.getUserState()
    .subscribe(user => {
      this.user = user;
    });

    //Get ID of Product from URL
    const productID = this.route.snapshot.paramMap.get('id');
    console.log(productID);
  }

  newProductInfo(passProductInfo) {
    this.productService.changeMessage(passProductInfo);
  }

  addToCart(passProductInfo: Product) {
    this.productService.changeMessage(passProductInfo);
  }

  deleteProduct(product: Product) {    
    console.log(product);
    this.productService.deleteProduct(product);
  }
  
}
