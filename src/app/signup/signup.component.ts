import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm, } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Apollo, gql } from 'apollo-angular';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private apollo: Apollo, private signupAlert: MatSnackBar) { }

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

  user = '';
  firstname = '';
  lastname = '';
  Email = '';
  pass = '';
  usertype = '';

  private ADD_NEW_USER = gql`
    mutation createNewUser(
        $un:String!,
        $fn:String!,
        $ln:String!,
        $pw:String!,
        $e:String!,
        $ut:String!){
          createUser(username: $un, firstname: $fn, lastname: $ln,
            password: $pw, email: $e, type: $ut){
              username
              firstname
              lastname
              password
              email
              type
            }
        }
  `

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

  addNewUser() {
    this.apollo.mutate ({
      mutation: this.ADD_NEW_USER,
      variables: {
        un: this.user,
        fn: this.firstname,
        ln: this.lastname,
        pw: this.pass,
        e: this.Email,
        ut: this.usertype
      }
    }).subscribe(response => {
      console.log(response)
      this.signupAlert.open("Registered Successfully!", "Close")
    },
    error => {
      console.log(error)
      this.signupAlert.open("Hmm... Something is Wrong Here...", "Close")
    })
  }
}
