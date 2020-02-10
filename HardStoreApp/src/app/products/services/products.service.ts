import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Product } from '../models/products';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;

  constructor(
    public afs: AngularFirestore,
    private router: Router) {
    // this.products = this.afs.collection('Products').valueChanges();

    this.productsCollection = this.afs.collection('Products', ref => ref.orderBy('name', 'asc'));

    this.products = this.productsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product){
    this.productsCollection.add(product);
  }

  updateProduct(product: Product){
    this.productDoc = this.afs.doc(`Products/${product.id}`);
    this.productDoc.update(product);
  }

  deleteProduct(product: Product){
    this.productDoc = this.afs.doc(`Products/${product.id}`);
    this.productDoc.delete();
  }
}
