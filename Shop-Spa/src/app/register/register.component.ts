import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user: User;
registerForm: FormGroup;
  constructor(private authService: AuthService, private alertifyService: AlertifyService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'missmatch': true};
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      username: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validator: this.passwordMatchValidator});
  }

  register() {
    if (this.registerForm.valid) {
    this.user = Object.assign({}, this.registerForm.value);
    this.authService.register(this.user).subscribe( () => {
      this.alertifyService.success('Registration successful');
    }, error => {
      this.alertifyService.error(error);
    });
  }
}
}
