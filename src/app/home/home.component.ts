import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListingService } from '../services/listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  listing = new FormGroup({
    title: new FormControl('', Validators.required),
    size: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    agentName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    bedrooms: new FormControl('', Validators.required),
    washrooms: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  url: string;

  constructor(
    private listingsService: ListingService,
    private router: Router
  ) {}

  onSubmit() {
    const formValues = this.listing.value;
    console.log(formValues);
    // this.listingsService.postListing(formValues).subscribe((data) => {
    //   console.log(data);
    //   this.router.navigate(['/listings']);
    // });
  }

  onFileChange(event: any) {
    if (event.target.files) {
      this.listing.value.image = event.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
}
