import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CarsComponent } from 'src/app/cars/cars.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { AboutComponent } from 'src/app/about/about.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { CarReservationComponent } from 'src/app/car-reservation/car-reservation.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'flota', component: CarsComponent },
    { path: 'flota/rezerwacja/:id', component: CarReservationComponent },
    // { path: 'flota/:id', component: CarsComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'onas', component: AboutComponent },
    { path: 'rejestracja', component: RegisterComponent },

    { path: '**', redirectTo: '', pathMatch: 'full'},

];
