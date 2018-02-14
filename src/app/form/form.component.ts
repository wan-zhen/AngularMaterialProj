import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MatDatepickerInputEvent } from '@angular/material';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  startDate = moment(new Date(1992, 11, 24));
  minDate = moment(new Date(1992, 11, 10));
  maxDate = moment(new Date(1992, 11, 30));
  constructor() {}
  ngOnInit() {}

  /** 會回傳true或false來告知datepicker什麼時間是不可以被選擇的，例如每週五是不可選 */
  fridayFilter(date: moment.Moment): boolean {
    const day = date.day();
    return day !== 5;
  }

  logDateInput($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }
  logDateChange($event: MatDatepickerInputEvent<moment.Moment>) {
    console.log($event);
  }
}
