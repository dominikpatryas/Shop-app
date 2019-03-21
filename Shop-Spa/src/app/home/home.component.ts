import { Component, OnInit } from '@angular/core';
import { Car } from '../_models/Car';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
