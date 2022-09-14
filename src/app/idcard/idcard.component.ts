import { Component, OnInit } from '@angular/core';
import { Idcard } from '../idcard';
import { IdcardService } from '../idcard.service';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css'],
})
export class IdcardComponent implements OnInit {
  public details: Idcard[] = [];

  constructor(private _idcardService: IdcardService) {
    this._idcardService.getidcard().subscribe(
      (data:any) => {
        this.details = data;
      },
      (err:any) => {
        alert ('Internal Server Error')
      }
    )
  }

  ngOnInit(): void {}
}
