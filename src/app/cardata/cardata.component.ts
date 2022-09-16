import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cardata } from '../cardata';
import { CardataService } from '../cardata.service';

@Component({
  selector: 'app-cardata',
  templateUrl: './cardata.component.html',
  styleUrls: ['./cardata.component.css'],
})
export class CardataComponent implements OnInit {
  public vehicles: Cardata[] = [];
  public filterterms: string = '';
  public column: string = '';
  public order: string = '';

  constructor(
    private _cardataService: CardataService,
    private _router: Router
  ) {
    this._cardataService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },

      (err: any) => {
        alert('Internal server error');
      }
    );
  }
  ngOnInit(): void {}

  delete(id: string) {
    this._cardataService.deleteVehicle(id).subscribe(
      (data: any) => {
        this.vehicles = data;
        alert('Car Was Deleted Successfully !!!');
        location.reload();
      },
      (err: any) => {
        alert('Internal Server Issues');
      }
    );
  }

  filter() {
    this._cardataService.getfilteredVehicles(this.filterterms).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal Server Issues');
      }
    );
  }

  page(pageNo: number) {
    this._cardataService.getPagedVehicles(pageNo).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal Server Issue');
      }
    );
  }

  sort() {
    this._cardataService.getSortedVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
  view(id: string) {
    this._router.navigateByUrl('/dashboard/vehicle-details' + '/' + id);
  }
}
