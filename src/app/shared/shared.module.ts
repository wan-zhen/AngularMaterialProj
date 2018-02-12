import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSidenavModule
} from '@angular/material';

// 共用模組
@NgModule({
  // 先import
  imports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule
  ],
  // 再export
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule
  ]
})
export class SharedModule {}
