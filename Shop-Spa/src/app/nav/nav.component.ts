import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { tokenGetter } from '../app.module';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }
  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('logg successful');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/flota']);
    });
  }

  logginIn() {
    return this.authService.logginin();
  }

  logout() {
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     this.authService.dekodedToken = null;
    //  this.authService.currentUser = null;
     this.alertify.message('Logged out!');
     this.router.navigate(['/home']);

  }

}
