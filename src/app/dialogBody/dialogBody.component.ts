import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialogBody',
  templateUrl: './dialogBody.component.html',
  styleUrls: ['./dialogBody.component.css'],
})
export class DialogBodyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  listing = new FormGroup({
    title: new FormControl(this.data.title, Validators.required),
    description: new FormControl(this.data.description, Validators.required),
    agentName: new FormControl(this.data.agentName, Validators.required),
    address: new FormControl(this.data.address, Validators.required),
    bedrooms: new FormControl(this.data.bedrooms, Validators.required),
    washrooms: new FormControl(this.data.bathrooms, Validators.required),
    price: new FormControl(this.data.price, Validators.required),
  });

  onSubmit(): void {
    let editedListing = this.listing.value;
    let id = this.data.id;

    this.dialogRef.close(editedListing);
  }
}
