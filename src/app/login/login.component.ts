import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apolloClient: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  users = []
  user = ""
  pass = ""
  hide = true;

  private GET_USERS = gql`
    query{
      getUsers{
        username
        password
        type
      }
    }
  `

  // private LOGIN_CUSTOMER = gql`
  //   query{
  //     loginCustomer($un:String!, $pw:String!){
  //       secret
  //     }
  //   }
  // `

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

  // loginUser() {
  //   this.apolloClient.query<any>({
  //     query: this.GET_USERS,
  //   }).subscribe(response => {
  //     console.log(response)
  //     console.log(response.data)
  //     this.users = response.data?.getUsers

  //     console.log(response.data?.getUsers[0])

  //     if(this.user == response.data.getUsers[].username && this.pass == response.data.getUsers) {
  //       this.router.navigate(['/admin']);
  //     }
  //   })
  // }
}
