import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../_models/Car';
import { CarService } from '../_services/car.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../_models/Photo';

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {

 car: Car;
  constructor(private carService: CarService, private alertify: AlertifyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.car = data['car'];
  });
console.log(this.car.photoUrl, this.car.brand);
  // ngOnInit() {
  //   this.loadCar();
  // }

  // loadCar() {
  //   this.carService.getCar(+this.route.snapshot.params['id']).subscribe((car: Car) => {
  //     this.car = car;
  //   }, error => {
  //     this.alertify.error(error);
  //   });
  // }

}
}
