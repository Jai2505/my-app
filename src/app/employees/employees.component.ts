import { Component, OnInit } from '@angular/core';
import { Employee2 } from '../employee2';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  public company: string = '';
  public package: number = 0;
  public employees: Employee2[] = [];
  public totalpackage: number = 0;
  constructor() {}

  add() {
    this.employees.push({
      name: this.name,
      age: this.age,
      company: this.company,
      package: this.package,
    });
    this.total();
  }

  total() {
    this.totalpackage = this.totalpackage + this.package;
  }

  LowtoHigh() {
    this.employees.sort((a, b) => a.package - b.package);
  }

  HightoLow() {
    this.employees.sort((a, b) => b.package - a.package);
  }

  clear() {
    this.employees = [];
  }

  remove(i: number) {
    this.employees.splice(i, 1);
  }

  ngOnInit(): void {}
}
