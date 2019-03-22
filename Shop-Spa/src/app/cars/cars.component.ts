import { Component, OnInit } from '@angular/core';
import { CarService } from '../_services/car.service';
import { Car } from '../_models/Car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.carService.getCars().subscribe( (cars: Car[]) => {
      console.log('fajnie');
      this.cars = cars;
      console.log(this.cars);

    }, error => {
      console.log(error);
    });
  }
}
