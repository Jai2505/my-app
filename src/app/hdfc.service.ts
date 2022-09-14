import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HdfcService {
  public balance: number = 0;

  constructor() {}

  deposit(amout: number) {
    this.balance = this.balance + amout;
  }

  withdraw(amout: number) {
    this.balance = this.balance - amout;
  }

  getBalance() {
    return this.balance;
  }
}
