import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-listingslist',
  templateUrl: './listingslist.component.html',
  styleUrls: ['./listingslist.component.css']
})
export class ListingslistComponent implements OnInit {

  value = 'Search';
  listings = [];
  searchTerm = ''
  term = ''

  private GET_LISTINGS = gql`
    query {
      viewAllListings {
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
    }`;

  constructor(private apolloClient: Apollo) {
    this.getListings()
  }

  getListings() {
    this.apolloClient.query<any>({
      query: this.GET_LISTINGS,
    }).subscribe(response => {
      console.log(response)
      console.log(response.data)
      this.listings = response.data?.viewAllListings
    })
  }

  ngOnInit(): void {
  }

}
