import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private readonly storedToken = signal<string|null>(null)
  private readonly token = computed(()=>{
    return this.storedToken()||localStorage.getItem('token')
  })
  setToken(token:string){
    this.storedToken.set(token)
  }
  getToken(){
    return this.token
  }
}
