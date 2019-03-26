import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Car } from '../_models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getCars(): Observable<Car[]> {
  return this.http.get<Car[]>(this.baseUrl + 'cars/');
}

getCar(id): Observable<Car> {
  return this.http.get<Car>(this.baseUrl + 'cars/' + id);
}
}
