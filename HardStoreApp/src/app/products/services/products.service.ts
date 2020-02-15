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

  //products: Product[];
  readonly selectedProduct: Product;

  productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;
  productDoc: AngularFirestoreDocument<Product>;
  
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(
    public afs: AngularFirestore,
    private router: Router) {
    // this.products = this.afs.collection('Products').valueChanges();

      this.productsCollection = this.afs.collection('Products', ref => ref.orderBy('price', 'asc'));
      this.productsCollection = this.afs.collection('Products', ref => ref.orderBy('price', 'desc'));
      this.productsCollection = this.afs.collection('Products', ref => ref.orderBy('name', 'asc'));

    this.products = this.productsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Product;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product){
    this.productsCollection.add(product).then(() => {
        this.router.navigate(['/products']);
      });
  }

  editProduct(product: Product){
    console.log(product);
    this.productDoc = this.afs.doc(`Products/${product.id}`);
    this.productDoc.update(product).then(() => {
      this.router.navigate(['/products']);
    });
  }

  deleteProduct(product: Product){
    this.productDoc = this.afs.doc(`Products/${product.id}`);
    this.productDoc.delete();
  }

  selectProduct(product: Product){
    (this as any).selectedProduct = product;
  }

}
