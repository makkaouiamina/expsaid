import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup-container-right',
  templateUrl: './signup-container-right.component.html',
  styleUrls: ['./signup-container-right.component.css']
})
export class SignupContainerRightComponent implements OnInit {

  @Output() switch = new EventEmitter();
  showE: true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.switch.emit(this.showE);
  }

}
