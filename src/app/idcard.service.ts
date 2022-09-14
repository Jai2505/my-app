import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idcard } from './idcard';

@Injectable({
  providedIn: 'root',
})
export class IdcardService {
  constructor(private _httpClient: HttpClient) {}

  getidcard(): Observable<Idcard[]> {
    return this._httpClient.get<Idcard[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
