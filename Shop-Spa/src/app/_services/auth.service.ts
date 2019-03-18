import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
dekodedToken: any;
jwtHelper = new JwtHelperService();
baseUrl = environment.apiUrl + 'auth/';
constructor(private http: HttpClient) { }

login(model: any) {
   return this.http.post(this.baseUrl + 'login/', model)
         .pipe(map((response: any) => {
            const user = response;
            if (user) {
               localStorage.setItem('token', user.response);
               this.dekodedToken = this.jwtHelper.decodeToken(user.token);
            }
         }));

}
}
