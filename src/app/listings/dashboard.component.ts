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
    'ListingOptions',
  ];

  constructor(private listingsService: ListingService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.listingsService.getListings().subscribe((result: Listing[]) => {
      this.listings = result;
      console.log(this.listings);
    });
  }

  handleDeleteListing(id: number): void {
    this.listingsService.deleteListing(id).subscribe((result: Listing[]) => {
      this.fetchData();
    });
  }

  handleEditListing(id: number): void {
    console.log('Edit');
  }
}
