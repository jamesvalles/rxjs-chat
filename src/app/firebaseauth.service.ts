import { Injectable, EventEmitter, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app'
import {Router} from '@angular/router'

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { error } from 'util';
import {ChatPageComponent} from '../app/chat-page/chat-page.component';

@Injectable({
  providedIn: 'root'
})

export class FirebaseauthService {
  
  loggedin : boolean; 

  constructor(private fauth : AngularFireModule, private router: Router){
    firebase.initializeApp(environment.firebase);
   }

   login(email : string, password : string){
    console.log("Firebase Auth has started.")

    return  firebase.auth().signInWithEmailAndPassword(email, password);
  }

  setAuthState(state : boolean){
    this.loggedin = state;
    
  }

  getAuthState(){
    return this.loggedin;
  }
}
