import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

// 共用模組
@NgModule({
  // 先import
  imports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  // 再export
  exports: [
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class SharedModule {}
