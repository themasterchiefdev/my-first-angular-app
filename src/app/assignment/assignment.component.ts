import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  buttonClicked = false;
  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    const timeStamp = new Date();
    console.log(timeStamp.getTime.toString());
    return (this.buttonClicked = !this.buttonClicked);
  }
}
