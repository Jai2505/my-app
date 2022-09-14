import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardata } from './cardata';

@Injectable({
  providedIn: 'root',
})
export class CardataService {
  constructor(private _httpClient: HttpClient) {}

  getVehicles(): Observable<Cardata[]> {
    return this._httpClient.get<Cardata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1'
    );
  }

  deleteVehicle(id: string): Observable<Cardata> {
    return this._httpClient.delete<Cardata>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }

  getfilteredVehicles(filterterms: string): Observable<Cardata[]> {
    return this._httpClient.get<Cardata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?filter=' +
        filterterms
    );
  }

  getPagedVehicles(pageNo: number): Observable<Cardata[]> {
    return this._httpClient.get<Cardata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pageNo
    );
  }

  createVehicle(vehicle: Cardata): Observable<Cardata> {
    return this._httpClient.post<Cardata>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction', vehicle
   );
  }

  getSortedVehicles(column: string, order: string): Observable<Cardata[]> {
    return this._httpClient.get<Cardata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?sortBy=' +
        column +
        '&order=' +
        order
    );
  }
}
