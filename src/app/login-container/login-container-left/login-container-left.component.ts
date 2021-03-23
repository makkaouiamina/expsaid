import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-container-left',
  templateUrl: './login-container-left.component.html',
  styleUrls: ['./login-container-left.component.css']
})
export class LoginContainerLeftComponent implements OnInit {
  @Output() childToParent = new EventEmitter;
  showl = true;

  constructor() { }

  ngOnInit(): void {
  }
  sendToParent(){
    this.childToParent.emit(this.showl);
  }

}
