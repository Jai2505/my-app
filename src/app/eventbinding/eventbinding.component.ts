import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css'],
})
export class EventbindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submit() {
    alert('submit kicked');
  }
  test() {
    alert('key up');
  }

  test2() {
    alert('keydown');
  }

  test3() {
    alert('keypress');
  }
  test4() {
    alert('mouseenter');
  }
  test5() {
    alert('mouseleave');
  }
  test6(){
    alert("double click")
  }
}
