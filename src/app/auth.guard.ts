import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {FirebaseauthService} from './firebaseauth.service';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  loggedin: boolean; 
  constructor(private _fbservice : FirebaseauthService, private router : Router){
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      this.loggedin = this._fbservice.getAuthState(); 
      if(this.loggedin){
      return true; 
    }else{
      alert("You don't have permission to view this page.");
      this.router.navigate(['']);

    }
    }
  }
  

