import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-cart.component',
  templateUrl: './cart.component.component.html',
  styleUrls: ['./cart.component.component.css'],
})
export class CartComponentComponent implements OnInit {
  public name: string = '';
  public price: number = 0;
  public quantity: number = 0;

  public products: Product[] = [];
  public totalAmount: number = 0;
  
  

  constructor() {}
  add() {
    this.products.push({
      name: this.name,
      price: this.price,
      quantity: this.quantity,
    });
    this.total();
    
  }
  total() {
    this.totalAmount = 0;
    for (let product of this.products)
      this.totalAmount = this.totalAmount + product.price * product.quantity;
  }

  cost(price: number, quantity:number){
     return price * quantity;
  }
  
  delete(i: number) {
    this.products.splice(i, 1);
  }

  clear() {
    this.products = [];
  }

  LowtoHigh() {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }

  HightoLow() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }

  ngOnInit(): void {}
}
