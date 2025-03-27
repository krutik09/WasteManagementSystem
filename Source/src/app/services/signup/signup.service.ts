import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Signup } from '../../models/Signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private readonly httpClient =  inject(HttpClient)
  private readonly baseUri = "http://localhost:5297/api/"
  SignUp(signupObj:Signup){
    return this.httpClient.post<any>(this.baseUri+"User",signupObj);
  }
}
