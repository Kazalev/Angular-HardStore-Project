import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  message: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.currentMessage.subscribe(message => this.message = message)
  }

  updateProduct(message){
    console.log(message);
    this.productService.editProduct(this.message);
  }
  
}
