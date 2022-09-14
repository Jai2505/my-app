import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardataService } from '../cardata.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
})
export class CreateVehicleComponent implements OnInit {
  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
  });

  constructor(private _cardataService: CardataService) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.vehicleForm.value);

    this._cardataService.createVehicle(this.vehicleForm.value).subscribe(
      (data: any) => {
        alert('Created Successfully!!!');
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
