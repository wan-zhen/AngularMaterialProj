import { Component, OnInit } from '@angular/core';
import { SharedComponent } from '../shared/shared.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  title = 'AngularMaterial';
  constructor() {}

  ngOnInit() {}
}
