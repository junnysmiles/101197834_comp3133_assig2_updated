import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-createlisting',
  templateUrl: './createlisting.component.html',
  styleUrls: ['./createlisting.component.css']
})
export class CreatelistingComponent implements OnInit {

  id = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  street = new FormControl('', [Validators.required]);
  city = new FormControl('', [Validators.required]);
  zip = new FormControl('', [Validators.required]);
  price = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [Validators.required]);

  Id = ""
  lTitle = ""
  desc = ""
  Street = ""
  City = ""
  postalcode = ""
  Price = ""
  Email = ""
  user = ""
  Secret = "adminsecret"

  private ADD_NEW_LISTING = gql`
    mutation createNewListing(
      $li:String!,
      $lt:String!,
      $d:String!,
      $s:String!,
      $c:String!,
      $postal:String!,
      $p:Float!,
      $e:String!,
      $u:String!,
      $sec:String!){
        createListing(listing_id: $li, listing_title: $lt, description: $d,
          street: $s, city: $c, postal_code: $postal, price: $p, email: $e,
          username: $u, secret: $s){
            listing_id
            listing_title
            description
            street
            city
            postal_code
            price
            email
            username
          }
      }
  `

  constructor(private apollo: Apollo, private signupAlert: MatSnackBar) { }

  ngOnInit(): void {
  }

  getIdErrorMessage() {
    if (this.id.hasError('required')) {
      return 'You must enter a listing ID!';
    }

    return this.id.hasError('id') ? 'Not a valid listing ID' : '';
  }

  getTitleErrorMessage() {
    if (this.title.hasError('required')) {
      return 'You must enter a listing title!';
    }

    return this.title.hasError('title') ? 'Not a valid listing title' : '';
  }

  getDescErrorMessage() {
    if (this.description.hasError('required')) {
      return 'You must enter a listing description!';
    }

    return this.description.hasError('description') ? 'Not a valid listing description' : '';
  }

  getStreetErrorMessage() {
    if (this.street.hasError('required')) {
      return 'You must enter a listing street address!';
    }

    return this.street.hasError('street') ? 'Not a valid listing street address' : '';
  }

  getCityErrorMessage() {
    if (this.city.hasError('required')) {
      return 'You must enter a listing city!';
    }

    return this.city.hasError('city') ? 'Not a valid listing city' : '';
  }

  getZipErrorMessage() {
    if (this.zip.hasError('required')) {
      return 'You must enter a listing postal code!';
    }

    return this.zip.hasError('zip') ? 'Not a valid listing postal code' : '';
  }

  getPriceErrorMessage() {
    if (this.price.hasError('required')) {
      return 'You must enter a listing price!';
    }

    return this.price.hasError('price') ? 'Not a valid listing price' : '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an admin email address!';
    }

    return this.email.hasError('email') ? 'Not a valid admin email address' : '';
  }

  getUserErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter an admin username!';
    }

    return this.username.hasError('username') ? 'Not a valid admin username' : '';
  }

  addNewListing() {
    this.apollo.mutate ({
      mutation: this.ADD_NEW_LISTING,
      variables: {
        li: this.Id,
        lt: this.lTitle,
        d: this.desc,
        s: this.Street,
        c: this.City,
        postal: this.postalcode,
        p: this.Price,
        e: this.Email,
        u: this.user,
        sec: this.Secret
      }
    }).subscribe(response => {
      console.log(response)
      this.signupAlert.open("Added Successfully!", "Close")
    },
    error => {
      console.log(error)
      this.signupAlert.open("Hmm... Something is Wrong Here...", "Close")
    })
  }
}
