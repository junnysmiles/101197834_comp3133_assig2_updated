import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = new FormControl('', [Validators.required]);
  fn = new FormControl('', [Validators.required]);
  ln = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter your username!';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  getFirstNameErrorMessage() {
    if (this.fn.hasError('required')) {
      return 'You must enter your first name!';
    }

    return this.fn.hasError('fn') ? 'Not a valid input' : '';
  }

  getLastNameErrorMessage() {
    if (this.ln.hasError('required')) {
      return 'You must enter your last name!';
    }

    return this.ln.hasError('fn') ? 'Not a valid input' : '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your email!'
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPassErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a password!'
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  nativeSelectFormControl = new FormControl('valid', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

}
