import { Component, Input, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-itemcart',
  templateUrl: './itemcart.component.html',
  styleUrls: ['./itemcart.component.css'],
})
export class ItemcartComponent implements OnInit {
  public items: Items[] = [];
  @Input() rating: number = 0;

  constructor(private _itemsService: ItemsService) {
    this._itemsService.getitems().subscribe(
      (data: any) => {
        this.items = data;
      },

      (err: any) => {
        alert('Internal Server Error');
      }
    );
  }

  ngOnInit(): void {}
}
