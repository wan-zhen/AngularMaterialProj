import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Injectable } from '@angular/core';
// 路由
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './button/button.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { StepperComponent } from './stepper/stepper.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouterModule, UIRouter } from '@uirouter/angular';
import { StateTree } from '@uirouter/visualizer';
import { PeopleService } from '../shared/people.service';

const dashboard = { name: 'dashboard', url: '/dashboard', component: DashboardComponent };
const button = { name: 'button', url: '/button', component: ButtonComponent };
const selectionList = { name: 'selectionList', url: '/selectionList', component: SelectionListComponent };
const stepper = { name: 'stepper', url: '/stepper', component: StepperComponent };
const form = { name: 'form', url: '/form', component: FormComponent };

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
    // AppRoutingModule, 原生路由
    BrowserAnimationsModule,
    SharedModule, // 抽共用 Material 模組用
    UIRouterModule.forRoot(
      {
        states: [dashboard, button, selectionList, stepper, form],
        useHash: false,
        config: uiRouterConfigFn
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/** UIRouter Config */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  // const peopleService = injector.get(PeopleService);

  // peopleService.getAllPeople();

  // If no URL matches, go to the `dashboard` state by default
  router.urlService.rules.otherwise({ state: 'dashboard' });

  console.log(document.getElementById('statetree'));
  // Use ui-router-visualizer to show the states as a tree
  StateTree.create(router, document.getElementById('statetree'), { width: 400, height: 300 });
}
