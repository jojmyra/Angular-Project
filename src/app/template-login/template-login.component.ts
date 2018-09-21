import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-template-login',
  templateUrl: './template-login.component.html',
  styleUrls: ['./template-login.component.css']
})
export class TemplateLoginComponent implements OnInit {

  constructor(private Auth: AuthService,
    private modalService: NgbModal) { }

  logginStatus = false;
  closeResult: string;
  emailAccount = '';

  ngOnInit() {

  }

  loggedIn(email){
    this.emailAccount = email;
  }

  submit(event) {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#pass').value;
    
    this.Auth.getLoginDetails(email, password).subscribe(data => {
      console.log(data);
      
      if(data.success){
        console.log("true");
        this.logginStatus = true;
        this.loggedIn(email);
        window.alert("เข้าสู่ระบบสำเร็จ!")
        this.modalService.dismissAll();
        
      } else {
        console.log("false");
        
        console.log(data.message);
        console.log(data.token);
        window.alert("ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้งค่ะ!")
      }
    }, err => {
      if(!err.success) {
        window.alert("ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้งค่ะ!")
      }
      
    })
  }
}
