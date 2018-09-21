import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AlertsService } from 'angular-alert-module';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
interface Register {
    email: string,
    password: string,
    name: string,
    telephone: string,
    birthDay: string,
}

@Component({
  selector: 'app-template-register',
  templateUrl: './template-register.component.html',
  styleUrls: ['./template-register.component.css']
})
export class TemplateRegisterComponent implements OnInit {

  constructor(private Auth: AuthService,
    private alerts: AlertsService,
    private modalService: NgbModal) { }

  ngOnInit() {
    
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  registerUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#reg-email').value;
    const password = target.querySelector('#reg-pwd').value;
    const name = target.querySelector('#reg-name').value;
    const telephone = target.querySelector('#reg-tel').value;
    const birthDay = target.querySelector('#reg-bd').value;
    const cfpassword = target.querySelector('#reg-cfpwd').value;    
    
    this.Auth.register(email, password, name, telephone, birthDay).subscribe(data => {
      if(data.success){
        alert("Configurations registed successfully!");

      } else {
        alert("Can't register, please try again!");
      }
    })
  }
}
