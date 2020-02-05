import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router) { }

    getUserState(){
      return this.afAuth.authState;
    }

    login(email: string, password: string){
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          if(userCredential) {
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

    insertUserData(userCredential: firebase.auth.UserCredential){
      return this.db.doc(`Users/${userCredential.user.uid}`).set({
        email: this.newUser.email,
        firstName: this.newUser.firstName,
        lastName: this.newUser.lastName,
        age: this.newUser.age,
        address: this.newUser.address,
        role: 'network user'
      })
    }

    logout(){
      return this.afAuth.auth.signOut();
    }
}
