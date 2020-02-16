import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  passProductInfo: any;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.productService.currentPassProductInfo.subscribe(passProductInfo => this.passProductInfo = passProductInfo);

    //Get ID of Product from URL
    const productID = this.route.snapshot.paramMap.get('id');
    console.log(productID);
  }

}
