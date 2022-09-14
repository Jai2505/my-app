import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent implements OnInit {
  public age: number = 22;
  public name: string = 'Ram';
  public isIndian: boolean = true;

  public phones: number[] = [9894, 8500, 7777];

  public courses: string[] = ['Angular', 'React', 'Java'];

  public user: User = { name: 'Jayavardhan', city: 'Texas' };

  public student: Student = {
    name: 'Jayavardhan',
    Id: 'PGS001',
    marks: 99,
  };

  public employee: Employee = {
    name: 'Jayavardhan',
    company: 'TCS India Ltd.',
    location: 'Hyderabad',
    package: 25000000,
  };

  public users: User[] = [
    { name: 'John', city: 'Texas' },
    { name: 'Smith', city: 'Vegas' },
    { name: 'Raj', city: 'Delhi' },
    { name: 'Shyam', city: 'Hyderabad' },
  ];

  public students: Student []= [
    {name: 'Jayavardhan', Id: 'PGS001', marks: 99,
  },
  {name: 'Nagara', Id: 'PGS002', marks: 70,
  },
  {name: 'Raju', Id: 'PGS003', marks: 30,
  }
  ];

  constructor() {}

  ngOnInit(): void {}
}
