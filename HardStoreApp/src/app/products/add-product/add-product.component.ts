import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';
import { Product } from 'src/app/products/models/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss', '../../../error.styles.scss']
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

  constructor(
    private productService: ProductsService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.product.name != "" && this.product.description != ""){
      this.productService.addProduct(this.product);
    }
  }
}
