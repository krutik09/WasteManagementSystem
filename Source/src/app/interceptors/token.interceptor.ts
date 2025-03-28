import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../shared/services/jwt/jwt.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private readonly jwtService = inject(JwtService)
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = this.jwtService.getToken()();
    
    if(myToken) {
      request = request.clone({
        setHeaders : {Authorization: `Bearer ${myToken}`}
      })
    }
    return next.handle(request);
  }
}
