import { Component, OnInit } from '@angular/core';
import { Posts } from '../posts';
import { PostsService } from '../posts.service';



@Component({
  selector: 'app-socialpost',
  templateUrl: './socialpost.component.html',
  styleUrls: ['./socialpost.component.css'],
})
export class SocialpostComponent implements OnInit {
  public posts: Posts[] = [];

  constructor(private _postsService: PostsService) {
    this._postsService.getposts().subscribe(
      (data: any) => {
        this.posts = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
  ngOnInit(): void {}
}
