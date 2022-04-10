import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  value = 'Search';
  listings = [];
  searchTerm = ''
  term = ''
  secret = 'adminsecret'

  private GET_ADMIN_LISTINGS = gql`
  query {
    viewAllListingsCreatedByAdmin(secret:String) {
      viewListingsCreatedByAdmin(secret: $secret) {
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
  }`;

  constructor(private apolloClient: Apollo) {
    this.getAdminListings()
  }

  getAdminListings() {
    this.apolloClient.query<any>({
      query: this.GET_ADMIN_LISTINGS,
      variables: {
        secret: this.secret
      }
    }).subscribe(response => {
      console.log(response)
      console.log(response.data)
      this.listings = response.data?.viewListingsCreatedByAdmin
    })
  }

  ngOnInit(): void {
  }

}
