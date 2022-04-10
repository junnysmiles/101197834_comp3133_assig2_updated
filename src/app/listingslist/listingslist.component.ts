import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-listingslist',
  templateUrl: './listingslist.component.html',
  styleUrls: ['./listingslist.component.css']
})
export class ListingslistComponent implements OnInit {

  value = 'Search';
  listings = []

  private GET_LISTINGS = gql`
    query viewAllListings {
      listing_id
      listing_title
      description
      street
      city
      postal_code
      price
      email
      username
    }`;

  constructor(private apolloClient: Apollo) { }

  getListings() {
    this.apolloClient.watchQuery<any>({
      query: this.GET_LISTINGS,
      errorPolicy: 'all'
    }).valueChanges.subscribe(response => {
      console.log(response)
      console.log(response.data)
      this.listings = response.data?.listings
    })
  }

  ngOnInit(): void {
  }

}
