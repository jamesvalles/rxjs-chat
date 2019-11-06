import { Component, OnInit } from '@angular/core';
import {FirebaseauthService} from '../firebaseauth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email; 
  password;
  loggedin : boolean; 
  errorMessage : string;

  constructor(private _firebase : FirebaseauthService, private router : Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.email + " , " + this.password);
    this._firebase.login(this.email, this.password).then(result =>{
      console.log(result);
      console.log("Login successful.");
      this.router.navigate(['/chat']);
      this.loggedin = true; 
      this._firebase.setAuthState(this.loggedin);
  }).catch((error) => {
      this.loggedin = false; 
      this._firebase.setAuthState(this.loggedin);
      console.log("Login failed.");
      console.log("Output Message "  + error.message);
      alert(error.message);
  }
    );

  
      
    }
    
  }

