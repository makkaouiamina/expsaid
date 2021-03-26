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

  onSwitch(){
      this.showlogin = !this.showlogin;
      this.showsignup = !this.showsignup;
      console.log('show form',this.showSingE)
      this.showSingE = false;
  }

  onSwitchEmail(){
    this.showSingE= !this.showSingE;
  }
}
