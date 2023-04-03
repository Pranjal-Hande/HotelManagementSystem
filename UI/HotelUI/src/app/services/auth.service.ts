import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient, private router : Router) { }
  currentUser:BehaviorSubject<any> = new BehaviorSubject(null);

  baseServerUrl='https://localhost:7081';

  jwtHelperService = new JwtHelperService();
  
  login(loginInfo : Array<any>){
    return this.http.post(
      this.baseServerUrl + '/Auth/login',
      {
         userName : loginInfo[0],
         Password : loginInfo[1],

      },
      {
        responseType : 'text',
      }
    );
  }
   setToken(token : string){
   localStorage.setItem("access_token", token);
  
   this.loadCurrentUser();
   }

   loadCurrentUser(){
    const token=localStorage.getItem("access_token");
    const userInfo=token!=null?this.jwtHelperService.decodeToken(token) : null;

    const data=userInfo?{
      role:userInfo.role,
      email:userInfo.emailaddress,
      firstname:userInfo.givenname,
      lastname:userInfo.surname

    }: null;
    this.currentUser.next(data);
    this.router.navigate(['/Guest'])

   }
  }
