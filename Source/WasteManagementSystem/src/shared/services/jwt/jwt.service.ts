import {inject, Injectable, signal,} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from '../storage/storage.service';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class JWTService {
  private readonly storageService = inject(StorageService)
  secretKey = 'very..very..secret..key';
  token = signal<string>('')
  SetJWTToken(payload:any){
    let tokenString = this.signToken(payload,this.secretKey)
    this.token.set(tokenString)
    this.storageService.SetToken(tokenString)
  }
  GetJWToken(): string {
    if(this.token()!=''){
      return this.token()
    }
    this.token.set(this.storageService.GetToken())
    return this.token()
  }
  decodeToken() {
    const tokenHelper = new JwtHelperService()
    const token = this.GetJWToken()
    return tokenHelper.decodeToken(token)
  }


  ///////////-------------------------------
  base64url(source: any): string {
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    encodedSource = encodedSource.replace(/=+$/, '');

    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  }
  encodeToken(payload:any):string {
    let header = {
      "alg": "HS256",
      "typ": "JWT"
    };

    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    let encodedHeader = this.base64url(stringifiedHeader);

    let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    let encodedData = this.base64url(stringifiedData);

    let token = encodedHeader + "." + encodedData;
    return token
  }
  signToken(payload:any,key:string) {
    let secret = key;
    let token:any = this.encodeToken(payload);

    let signature:any = CryptoJS.HmacSHA256(token, secret);
    signature = this.base64url(signature);

    let signedToken = token + "." + signature;
    return signedToken;
  }
}
