import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Product } from '../models/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  searchText;

  productsCollection: AngularFirestoreCollection<Product>;

  constructor(private productService: ProductsService) { }

  ngOnInit() { 
  }
}
