import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent implements OnInit {
  public length: number = 0;

  public width: number = 0;

  public result: number = 0;

  constructor() {}
  area() {
    this.result = this.length * this.width;
  }

  peri() {
    this.result = (this.length + this.width) * 4;
  }
  ngOnInit(): void {}
}
