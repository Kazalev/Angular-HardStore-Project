import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LinkGuardGuard implements CanActivate {
  user: firebase.User;

  constructor(private auth: AuthService, private route: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });

    if (this.user) { return true; }

    console.log('Access Denied!');
    this.route.navigate(['/login']);
    return false;
  }

}
