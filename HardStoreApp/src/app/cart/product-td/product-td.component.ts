import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/products/models/products';

@Component({
  selector: 'app-product-td',
  templateUrl: './product-td.component.html',
  styleUrls: ['./product-td.component.scss']
})
export class ProductTDComponent implements OnInit {
  
  @Input('product')
  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
