import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accountdata } from './accountdata';

@Injectable({
  providedIn: 'root',
})
export class AccountdataService {
  constructor(private _httpClient: HttpClient) {}
  getAccount(): Observable<Accountdata[]> {
    return this._httpClient.get<Accountdata[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals'
    );
  }
}
