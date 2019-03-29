import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CarService } from '../_services/car.service';
import { Car } from '../_models/Car';

@Injectable()
export class CarResolver implements Resolve<Car[]> {
  constructor(private carService: CarService, private router: Router, private alertify: AlertifyService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Car[]> {
    return this.carService.getCars().pipe(
        catchError(error => {
            this.alertify.error('Problem in retrieving data');
            this.router.navigate(['/home']);
            // observable
            return of(null);
        }));
  }
}
