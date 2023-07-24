import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private url = 'RealEstateListings';
  constructor(private http: HttpClient) {}

  public getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${environment.apiURL}/${this.url}`);
  }
}
