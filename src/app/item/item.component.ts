import { Component, OnInit } from '@angular/core';

import { Item } from  '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items = [
    new Item(1,
      'Nike Air Force 1',
      'Running shoes',
      699,
      'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/rvf4fb6hchtepayyxhxu/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-deluxe-vBfvp9.jpg'),
  new Item(1,
      'Nike Air Max Deluxe',
      'Running shoes',
      499,
      'https://images.nike.com/is/image/DotCom/PDP_HERO/AJ7831_001_A_PREM/E0B8A3E0B8ADE0B887E0B980E0B897E0B989E0B8B2E0B89CE0B8B9E0B989-air-max-deluxe.jpg'),
  new Item(1,
      'Nike Zoom Pegasus Turbo',
      'Running shoes',
      449,
      'https://images.nike.com/is/image/DotCom/PDP_HERO/AO2605_600_A_PREM/E0B8A3E0B8ADE0B887E0B980E0B897E0B989E0B8B2E0B89AE0B8B2E0B8AAE0B980E0B881E0B987E0B895E0B89AE0B8ADE0B8A5-zoom-kd11-ep.jpg" alt="Photo of a Shiba Inu0'),
  new Item(1,
      'Nike EXP-X14 QS',
      'Running shoes',
      999,
      'https://images.nike.com/is/image/DotCom/PDP_HERO/AJ7292_001_A_PREM/E0B8A3E0B8ADE0B887E0B980E0B897E0B989E0B8B2E0B89CE0B8B9E0B989-air-vapormax-95.jpg'),
  new Item(1,
      'Nike Epic React Flyknit',
      'Running shoes',
      450,
      'https://images.nike.com/is/image/DotCom/PDP_HERO/AO2605_600_A_PREM/E0B8A3E0B8ADE0B887E0B980E0B897E0B989E0B8B2E0B89AE0B8B2E0B8AAE0B980E0B881E0B987E0B895E0B89AE0B8ADE0B8A5-zoom-kd11-ep.jpg'),
  new Item(1,
      'Nike EXP-X14',
      'Running shoes',
      300,
      'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/go9ejlsilpz2hq0eophu/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-plus-Z0D37G.jpg'),
  new Item(1,
      'Nike Air Max Plus',
      'Running shoes',
      299,
      'https://images.nike.com/is/image/DotCom/PDP_HERO/AQ0926_001_A_PREM/E0B8A3E0B8ADE0B887E0B980E0B897E0B989E0B8B2E0B89CE0B8B9E0B989-air-max-90-print.jpg'),
  new Item(1,
      'Nike Air Max 90 Print',
      'Running shoes',
      399,
      'https://images.nike.com/is/image/DotCom/PDP_HERO/AJ7292_001_A_PREM/E0B8A3E0B8ADE0B887E0B980E0B897E0B989E0B8B2E0B89CE0B8B9E0B989-air-vapormax-95.jpg'),
  new Item(1,
      'Air Jordan 1 Retro High OG',
      'Running shoes',
      339,
      'https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto/rvf4fb6hchtepayyxhxu/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-max-deluxe-vBfvp9.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
