import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CarsComponent } from 'src/app/cars/cars.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { AboutComponent } from 'src/app/about/about.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { CarReservationComponent } from 'src/app/car-reservation/car-reservation.component';
import { CarReservationResolver } from 'src/app/_resolvers/car-reservation.resolver';
import { AuthGuard } from 'src/app/_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
    path: '',
    runGuardsAndResolvers: 'always',
        children: [
    { path: 'flota', component: CarsComponent },
    { path: 'flota/rezerwacja/:id', component: CarReservationComponent, resolve: {car: CarReservationResolver}, canActivate: [AuthGuard] },
    { path: 'kontakt', component: ContactComponent },
    { path: 'onas', component: AboutComponent },
    { path: 'rejestracja', component: RegisterComponent },

    { path: '**', redirectTo: '', pathMatch: 'full'},
        ]
    }
];
