import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc-text-input',
  templateUrl: './dc-text-input.component.html',
  styleUrls: ['./dc-text-input.component.css']
})
export class DcTextInputComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  value:string = "";

}
