import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/models/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = {
    name: '',
    category: '',
    description: '',
    imgURL: '',
    quantity: null,
    price: null
  }

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.product.name != "" && this.product.description != ""){
      this.productService.addProduct(this.product);
      this.product.name = '';
    }
  }
}
