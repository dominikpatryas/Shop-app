import { Component, OnInit } from '@angular/core';
import { Car } from '../_models/Car';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
