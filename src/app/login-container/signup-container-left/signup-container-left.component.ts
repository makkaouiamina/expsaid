import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup-container-left',
  templateUrl: './signup-container-left.component.html',
  styleUrls: ['./signup-container-left.component.css']
})
export class SignupContainerLeftComponent implements OnInit {
  @Output() childToParent = new EventEmitter;
  showS = false;

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(){
    this.childToParent.emit(this.showS);
  }
}
