import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuth = false;
  isAuthChanged = new Subject<boolean>()
  newUser: any;
  users: Observable<Users[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    public afs: AngularFirestore,
    private router: Router) {
    this.users = this.afs.collection('Users').valueChanges();
  }

  getUsers() {
    return this.users;
  }

  get isAuth() {
    return this._isAuth;
  }

  initializeAuthState() {
    this.afAuth.authState.subscribe((userState) => {
      if (userState) {
        this._isAuth = true;
        this.isAuthChanged.next(true);
      } else {
        this._isAuth = false;
        this.isAuthChanged.next(false);
      }
    });
  }

  getUserState() {
    return this.afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        if (userCredential) {
          this.router.navigate(['/']);
        }
      }).catch(err => {
        console.log(err);
      })
  }

  createUser(user) {
    console.log(user);
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;
        console.log(userCredential);

        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/']);
          });
      }).catch(err => {
        console.log(err);
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      age: this.newUser.age,
      address: this.newUser.address,
      role: 'network user'
    })
  }

  logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    }).catch(err => {
      console.log(err);
    });
  }
}
