import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.css']
})
export class TemplateHeaderComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }


  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#usr').value;
    const password = target.querySelector('#pwd').value;
    this.Auth.getLoginDetails(username, password);
    console.log(username, password);
  }

}
