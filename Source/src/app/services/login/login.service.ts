import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../../models/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly httpClient =  inject(HttpClient)
  private readonly baseUri = "https://localhost:7154/api/"
  login(loginObj:Login){
    return this.httpClient.post(this.baseUri+"Auth/login",loginObj,{responseType:'text'});
  }
}
