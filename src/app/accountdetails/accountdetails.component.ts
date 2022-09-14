import { Component, OnInit } from '@angular/core';
import { Accountdata } from '../accountdata';
import { AccountdataService } from '../accountdata.service';

@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.css'],
})
export class AccountdetailsComponent implements OnInit {
  public accounts: Accountdata[] = [];

  constructor(private _accountdataService: AccountdataService) {
    this._accountdataService.getAccount().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  ngOnInit(): void {}
}
