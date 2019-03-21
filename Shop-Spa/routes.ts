import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CarsComponent } from 'src/app/cars/cars.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { AboutComponent } from 'src/app/about/about.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'flota', component: CarsComponent },
    { path: 'kontakt', component: ContactComponent },
    { path: 'onas', component: AboutComponent },

    { path: '**', redirectTo: '', pathMatch: 'full'},

];
