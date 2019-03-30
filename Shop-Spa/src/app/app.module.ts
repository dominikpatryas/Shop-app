import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlertifyService } from './_services/alertify.service';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CarService } from './_services/car.service';
import { appRoutes } from 'routes';
import { CarsComponent } from './cars/cars.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';
import { CarReservationResolver } from './_resolvers/car-reservation.resolver';
import { AuthGuard } from './_guards/auth.guard';
import { CarResolver } from './_resolvers/car.resolver';


export function tokenGetter() {        // for automatic sending token
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      RegisterComponent,
      HomeComponent,
      CarsComponent,
      AboutComponent,
      ContactComponent,
      FooterComponent,
      CarReservationComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      RouterModule.forRoot(appRoutes),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })   // interceptor
      ],
   providers: [
      AlertifyService,
      AuthService,
      CarService,
      CarReservationResolver,
      CarResolver,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }



// JwtModule.forRoot({
//    config: {
//       tokenGetter: tokenGetter,
//       whitelistedDomains: ['localhost:5000'],
//       blacklistedRoutes: ['localhost:5000/api/auth']
//    }
// })   // interceptor
// ],
