import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule,
  MatStepperModule
} from '@angular/material';

// 共用模組
@NgModule({
  // 先import
  imports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule
  ],
  // 再export
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatStepperModule
  ]
})
export class SharedModule {}
