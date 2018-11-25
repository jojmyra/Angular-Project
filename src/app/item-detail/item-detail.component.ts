import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITEMS } from '../item/mock-item'
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  id: string;
  items = ITEMS
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.items.find(item => item.id === this.id));
  }

}
