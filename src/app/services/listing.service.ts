import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor() {}

  public getListings(): Listing[] {
    let listing = new Listing();
    listing.Title = 'Nice House';
    listing.Description = 'Really nice house';
    listing.AgentName = 'John Smith';
    listing.Address = '123 Fake Street';
    listing.Bedrooms = 2;
    listing.Bathrooms = 2;
    listing.Price = 2;

    return [listing];
  }
}
