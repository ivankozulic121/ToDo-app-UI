import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';




@Injectable({
    providedIn: 'root'
}
)

export class ApiService{
    private token = '';
    private jwtToken$ = new BehaviorSubject<string>(this.token);
    private API_URL = 'http://localhost:3000/api'

    constructor( private http: HttpClient, private router: Router ){
        //this.isBrowser = isPlatformBrowser(this.platformId)
        const fetchedToken = localStorage.getItem('accessToken');

        if (fetchedToken){
            this.token = fetchedToken;
            this.jwtToken$.next(this.token);
            console.log( this.token + JSON.stringify(this.jwtToken$));
        }
    }

      jwtUserToken(): Observable<string> {
        return this.jwtToken$.asObservable();
    }

    getUserToken() {
        
        return this.token;
    }


    getAllTodos(): Observable<any>{
        return this.http.get(this.API_URL + '/todo' , /*{ headers: {
            Authorization: 'Bearer ' + this.token
        }}*/)
    }

    login( username: string, password: string) {

        this.http.post( this.API_URL + '/auth/login', { username, password})

        .subscribe((res: any) => {
            this.token = res.token
            this.jwtToken$.next(this.token);

            if (this.token){
                localStorage.setItem('accessToken', this.token);
            }
            this.router.navigateByUrl('/');

            
        })
            //const tokenn = localStorage.getItem('accessToken')
            //console.log(tokenn+ 'KURAC');
    }

    logout() {
        localStorage.removeItem('accessToken');
        this.token = '';
        this.jwtToken$.next(this.token);
        this.router.navigateByUrl('/login');
    }

 register( username: string, password: string) {
    this.http.post( this.API_URL + '/auth/register', { username, password}).subscribe((res:any) =>{
        this.router.navigateByUrl('/')}
    )  
 }
 
 createTodo( title: string, description: string) {
    return this.http.post(this.API_URL + '/todo', { title, description} );
 }
 updateStatus( statusValue: string, todoID: number ) {

    return this.http.patch( this.API_URL + '/todo' + '/' +todoID, {status:statusValue});
 }

 deleteTodo( id: number ) {
     return this.http.delete( this.API_URL + '/todo' + '/' + id );
 }
}