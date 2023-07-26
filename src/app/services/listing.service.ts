import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private url = 'PropertyListings';
  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${environment.apiURL}/${this.url}`);
  }

  postListing(data: object): Observable<Listing[]> {
    return this.http.post<Listing[]>(`${environment.apiURL}/${this.url}`, data);
  }

  deleteListing(id: number): Observable<Listing[]> {
    return this.http.delete<Listing[]>(
      `${environment.apiURL}/${this.url}/${id}`
    );
  }
}
