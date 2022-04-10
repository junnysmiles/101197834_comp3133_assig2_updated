import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter your username!';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  getPassErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter your password!'
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

}
