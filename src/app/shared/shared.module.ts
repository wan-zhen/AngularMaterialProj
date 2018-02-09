import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
// 共用模組
@NgModule({
  // 先import
  imports: [
    MatButtonModule, 
    MatIconModule,
    MatButtonToggleModule],
  // 再export
  exports: [
    MatButtonModule, 
    MatIconModule,
    MatButtonToggleModule]
})
export class SharedModule {}