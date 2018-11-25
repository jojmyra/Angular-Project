import { Component, OnInit } from '@angular/core';

import { ITEMS } from './mock-item'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items = ITEMS
   
  constructor() { }

  ngOnInit() {

  }

}
