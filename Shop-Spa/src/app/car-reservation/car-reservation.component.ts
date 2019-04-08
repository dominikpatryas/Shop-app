import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../_models/Car';
import { CarService } from '../_services/car.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../_models/Photo';
import { stringify } from '@angular/core/src/util';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../_models/User';
import { AuthService } from '../_services/auth.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent implements OnInit {

 car: Car;
 cars: Car[];
 currentUser: User;
 galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];
 bsConfig: Partial<BsDatepickerConfig>;
  constructor(private carService: CarService, private alertify: AlertifyService, private route: ActivatedRoute,
   private fb: FormBuilder, private authService: AuthService) { }
  rentForm: FormGroup;
currentCarId: any;
currentUserId: any;
data = new Date();

  ngOnInit() {
  this.route.data.subscribe(data => {
    this.cars = data['cars'];
   this.loadCar();
});
this.createRentForm();
this.bsConfig = {
  containerClass: 'theme-red'
};
this.checkDate();

this.galleryOptions = [
  {
    width: '500px',
    height: '500px',
    imagePercent: 100,
    thumbnailsColumns: 4,
    imageAnimation: NgxGalleryAnimation.Slide,
    preview: false
  }
];
this.galleryImages = this.getImages();
}

getImages() {
  const imageUrls = [];
  for (let i = 0; i < this.car.photos.length; i++) {
    imageUrls.push({
      small: this.car.photos[i].url,
      medium: this.car.photos[i].url,
      big: this.car.photos[i].url,
    });
  }

  return imageUrls;
}

  loadCar() {
    this.carService.getCar(+this.route.snapshot.params['id']).subscribe((car: Car) => {

      this.car = car;
      this.currentCarId = this.car.id;
    }, error => {
      this.alertify.error(error);
    });
  }

  createRentForm() {
    this.rentForm = this.fb.group({
      rent: [''],
      endrent: [''],
      messagerent: ['']
    });

  }

  rentCar() {
    this.car = Object.assign({}, this.rentForm.value);
    console.log(this.car.rent);
    if (this.car.isrent = false) { console.log('false'); }
      this.car.userid = this.authService.dekodedToken.nameid;
    this.carService.rentCar(this.currentCarId, this.car).subscribe(rent =>  {
      this.alertify.success('succesfully rented a car');
    }, error => {
      this.alertify.error(error);
    } );
  }

  checkDate() {
   const day = this.data.getUTCDate();
   const month = this.data.getUTCMonth() + 1;
   const year = this.data.getFullYear();
  }

}
