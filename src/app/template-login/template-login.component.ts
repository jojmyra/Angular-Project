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
    this.logginStatus = this.Auth.isLoggedIn;
    this.emailAccount = this.Auth.getEmail;
  }



  open(content) {
    this.modalService.dismissAll();
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

  logout() {
    this.logginStatus = false;
    this.Auth.setLoggedIn(false);
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#pass').value;
    this.Auth.getLoginDetails(email, password).subscribe(data => {
      console.log(data);
      if (data.success) {
        console.log("true");
        this.logginStatus = true;
        this.Auth.setLoggedIn(true);
        this.Auth.setEmail(email);
        window.alert("เข้าสู่ระบบสำเร็จ!")
        this.ngOnInit();
        this.modalService.dismissAll();
      } else {
        console.log("false");
        console.log(data.message);
        console.log(data.token);
        window.alert("ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง!");
      }
    }, err => {
      if (!err.success) {
        window.alert("ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง!");
      }
    });
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
        alert("สมัครสมาชิกสำเร็จ !");
        this.modalService.dismissAll();
      } else {
        alert("ไม่สามารถสมัครสมาชิกได้ กรุณาลองใหม่อีกครั้ง!");
      }
    })
  }
}
