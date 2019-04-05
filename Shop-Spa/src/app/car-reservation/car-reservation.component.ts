import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../_models/Car';
import { CarService } from '../_services/car.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../_models/Photo';
import { stringify } from '@angular/core/src/util';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {

 car: Car;
 cars: Car[];
 bsConfig: Partial<BsDatepickerConfig>;
  constructor(private carService: CarService, private alertify: AlertifyService, private route: ActivatedRoute,
   private fb: FormBuilder) { }
  rentForm: FormGroup;

  ngOnInit() {

  this.route.data.subscribe(data => {
    this.cars = data['cars'];
   this.loadCar();
   this.bsConfig = {
    containerClass: 'theme-red'
  };

});

}

  loadCar() {
    this.carService.getCar(+this.route.snapshot.params['id']).subscribe((car: Car) => {
      this.car = car;
    }, error => {
      this.alertify.error(error);
    });
  }

  createRentForm() {
    this.rentForm = this.fb.group({
      rentDate: [''],
      message: ['']
    });
  }

  rentCar() {
    this.carService.rentCar(1, this.car).subscribe(rent =>  {
      this.car.isrent = true;
      console.log(this.car);
      this.alertify.success('succesfully rented a car');
    }, error => {
      this.alertify.error(error);
    } );
  }

}
