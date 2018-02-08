import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatButtonModule} from '@angular/material';
import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  //  MatButtonModule,
    SharedModule // 抽共用 Material 模組用
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
