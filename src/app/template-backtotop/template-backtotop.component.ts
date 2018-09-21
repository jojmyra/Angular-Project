import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-backtotop',
  templateUrl: './template-backtotop.component.html',
  styleUrls: ['./template-backtotop.component.css']
})
export class TemplateBacktotopComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    if (document.body.scrollTop > 2) {
      (document.querySelector('#topBtn') as HTMLElement).style.display = 'block';
    }

  }

  topFunction() {
    document.body.scrollTo(0, 0);
    document.scrollingElement.scrollTo(0, 0);
  }

}
