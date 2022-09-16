import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardata } from '../cardata';
import { CardataService } from '../cardata.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent implements OnInit {
  public vehicle: Cardata = <Cardata>{};

  constructor(
    private _cardataService: CardataService,
    private _activatedRoute: ActivatedRoute
  ) {

    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.getVehicle(data.id);
      }
    )
  }

  ngOnInit(): void {}

  getVehicle(id: string) {
    this._cardataService.getVehicle(id).subscribe((data: any) => {
      this.vehicle = data;
    });
  }
}
