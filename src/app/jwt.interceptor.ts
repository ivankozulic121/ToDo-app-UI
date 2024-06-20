import { HttpInterceptorFn, ɵHttpInterceptorHandler } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './services/api.service';

@Injectable()

export class jwtInterceptor implements HttpInterceptor{

  constructor( private apiService: ApiService){}

  intercept( req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{

  const localToken = this.apiService.getUserToken()
  req = req.clone( {setHeaders:{ Authorization: 'Bearer ' + localToken}} )
  return next.handle(req); //znaci po opisu prosledjuje se sledecem interceptoru u nizu a ako ga nema onda backendu
  
  }
  }

