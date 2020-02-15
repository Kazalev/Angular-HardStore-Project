import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/products';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {
  
  private productDoc: AngularFirestoreDocument<Product>;
  product: Observable<Product>;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private afs: AngularFirestore) { }

  ngOnInit() {
    console.log("Details Product: " + this.product);

    //Get ID of Product from URL
    const productID = this.route.snapshot.paramMap.get('id');
    console.log(productID);

    this.productDoc = this.afs.doc<Product>(`Products/${productID}`);
    this.product = this.productDoc.valueChanges();
    console.log(this.product);
  }

  getProductDetails(){
    
  }

}
