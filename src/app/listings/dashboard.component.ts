import { Component } from '@angular/core';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  listings: Listing[] = [];
  displayedColumns: string[] = [
    'Title',
    'Description',
    'AgentName',
    'Address',
    'Number of Bedrooms',
    'Number of Bathrooms',
    'Price',
  ];

  constructor(private listingsService: ListingService) {}

  ngOnInit(): void {
    this.listings = this.listingsService.getListings();
    // console.log(this.listings);
  }
}
