import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss', '../../../error.styles.scss']
})
export class UpdateProductComponent implements OnInit {

  passProductInfo: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.currentPassProductInfo.subscribe(passProductInfo => this.passProductInfo = passProductInfo)
  }

  updateProduct(passProductInfo){
    console.log(passProductInfo);
    this.productService.editProduct(this.passProductInfo);
  }
  
}
