import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

  showlogin: boolean;
  showsignup:boolean;

  constructor() { }

  ngOnInit(): void {
    this.showlogin=false
    this.showsignup=false
  }

  fromloginChild($event){
    if($event = true){
      this.showlogin = $event
      this.showsignup = $event
    }
    console.log($event)
    console.log('loginproprety', this.showlogin)
    console.log('signuppropert', this.showsignup)
  }
  fromsignupChild($event){
    if($event = true){
      this.showlogin = !$event
      this.showsignup = !$event
    }
    console.log($event)
    console.log('loginproprety', this.showlogin)
    console.log('signuppropert', this.showsignup)
  }
}
