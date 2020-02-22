import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/products';
import { AuthService } from 'src/app/auth/auth.service';

const itemsInCart = [];

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
    private userService: AuthService,
    private router: Router) { }

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
    if(!this.user){
      this.router.navigate(["/register"]);
    } else {
      this.productService.changeMessage(passProductInfo);
  
      itemsInCart.push(passProductInfo);
      sessionStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
    }
  }

  deleteProduct(product: Product) {    
    console.log(product);
    this.productService.deleteProduct(product);
  }
  
}
