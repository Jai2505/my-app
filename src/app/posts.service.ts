import { HttpClient } from '@angular/common/http';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Posts } from './posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private _httpClient: HttpClient) {}

getposts():Observable<Posts[]>{
  return this._httpClient.get<Posts[]>(
    'https://jsonplaceholder.typicode.com/posts'
  )
  }

}
