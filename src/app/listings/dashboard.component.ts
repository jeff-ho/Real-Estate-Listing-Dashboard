import { Component } from '@angular/core';
import { Listing } from '../models/listing';
import { ListingService } from '../services/listing.service';
import { DialogBodyComponent } from '../dialogBody/dialogBody.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  listings: Listing[] = [];
  displayedColumns: string[] = [
    'Title',
    'Size',
    'Description',
    'AgentName',
    'Address',
    'Number of Bedrooms',
    'Number of Bathrooms',
    'Price',
    'ListingOptions',
  ];

  constructor(
    private listingsService: ListingService,
    private matDialog: MatDialog
  ) {}

  openDialog(listing: any): void {
    let dialogRef = this.matDialog.open(DialogBodyComponent, {
      width: '500px',
      data: listing,
    });

    dialogRef.afterClosed().subscribe((result) => {
      let editedListing = result;
      let listingId = listing.id;

      this.listingsService
        .editListing(listingId, editedListing)
        .subscribe((result) => {
          this.fetchData();
        });
    });
  }

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
}
