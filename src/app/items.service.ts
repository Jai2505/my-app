import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor(private _httpClient: HttpClient) {}

  getitems(): Observable<Items[]> {
    return this._httpClient.get<Items[]>('https://fakestoreapi.com/products');
  }
}
