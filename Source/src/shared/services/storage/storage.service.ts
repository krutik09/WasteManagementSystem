import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  SetToken(token:string){
    localStorage.setItem('token',token)
  }
  GetToken(): string{
    return localStorage.getItem('token')!
  }
}
