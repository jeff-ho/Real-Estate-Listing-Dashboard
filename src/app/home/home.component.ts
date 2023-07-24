import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listing = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    agentName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    bedrooms: new FormControl(1),
    washrooms: new FormControl(1),
    price: new FormControl(0),
  });

  onSubmit() {
    const listing = this.listing.value;
    console.log(listing);
  }
}
