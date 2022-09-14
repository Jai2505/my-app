import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  public number1: number = 0;

  public number2: number = 0;

  public result: number = 0;

  constructor() {}
  
  sum(){
    this.result = this.number1 + this.number2
  }
  subs(){
    this.result = this.number1 - this.number2
  }

  multi(){
    this.result = this.number1 * this.number2
  }

  divi(){
    this.result = this.number1 / this.number2
  }

  ngOnInit(): void {}
}
