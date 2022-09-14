import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css'],
})
export class EventRegistrationComponent implements OnInit {
  public name: string = '';
  public names: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  register() {
    this.names.push(this.name);
  }
  delete() {
    this.names.pop();
  }

  deleteall() {
    this.names = [];
  }
  deletethis(i: number) {
    this.names.splice(i, 1);
  }
  add(i:number){
    this.names.splice(i,0, this.name);
  }
  reverse(){
    this.names.reverse();
  }
}
