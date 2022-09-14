import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inbox } from './inbox';

@Injectable({
  providedIn: 'root',
})
export class InboxService {
  constructor(private _httpClient: HttpClient) {

  }

  getmails():Observable<Inbox[]>{

    return this._httpClient.get<Inbox[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }


}
