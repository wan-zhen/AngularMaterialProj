import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { MatStepperIntl } from '@angular/material';
// 自訂optional label文字內容
// Angular Material使用MatStepperIntl來設定optional文字內容，
// 其中的optionalLabel就是用來設定顯示文字的，
// 所以我們可自訂一個一樣的class，
// 然後在Angular Material的DI系統中取代原來的MatStepperIntl
// 如果希望能在所有元件使用到Stepper都用到的話，可以加在更外層的Ｍodule中。
export class TwStepperIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [{ provide: MatStepperIntl, useClass: TwStepperIntl }]
})
export class StepperComponent implements OnInit {
  isLinear: boolean;
  basicFormGroup: FormGroup;
  constructor() {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}
}
