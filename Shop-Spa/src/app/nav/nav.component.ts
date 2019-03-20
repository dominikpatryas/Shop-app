import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { tokenGetter } from '../app.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private alertify: AlertifyService) { }
  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('log');
      this.alertify.success('logg successful');
    }, error => {
      console.log(error);
      this.alertify.error(error);
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
  }

}
