import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

  showlogin: boolean;
  showsignup:boolean;
  showSingE:boolean;

  constructor() { }

  ngOnInit(): void {
    this.showlogin=false;
    this.showsignup=false;
    this.showSingE= false;
  }

  onSwitch($event){

      this.showlogin = !this.showlogin;
      this.showsignup = !this.showsignup;
  }

  onSwitchEmail(){
    this.showSingE= !this.showSingE;

  }
}
