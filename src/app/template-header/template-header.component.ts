import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.css']
})
export class TemplateHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#usr').value;
    const password = target.querySelector('#pwd').value;
    console.log(username, password);
  }

}
