import { Component } from '@angular/core';
import { Listing } from '../models/listing';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listing = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    agentName: new FormControl(''),
    address: new FormControl(''),
    bedrooms: new FormControl(1),
    washrooms: new FormControl(1),
    price: new FormControl(0),
  });

  onSubmit() {
    const listing = this.listing.value;
    console.log(listing);
  }
}
