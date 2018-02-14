import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 路由
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './button/button.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { StepperComponent } from './stepper/stepper.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    DashboardComponent,
    ButtonComponent,
    SelectionListComponent,
    StepperComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule // 抽共用 Material 模組用
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
