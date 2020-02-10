import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  
  products: Product[];
  updateState: boolean = false;
  productToUpdate: Product;
  
  @Output() selectProduct: EventEmitter<Product> = new EventEmitter();
  
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      console.log(products);

      products.forEach((prod) => {
        if (prod.name.length > 50) {
          console.log(prod.name.slice(0, 65));
          prod.name = prod.name.slice(0, 67);
        }
      })
      this.products = products; //Now it can be used it in HTML component
    })
  }
  
  updateProduct(event, product: Product) {
    this.updateState = true;
    this.productToUpdate = product;
  }

  deleteProduct(event, product) {
    this.productService.deleteProduct(product);
    console.log(product);
  }

  clickButton() {

  }
}
