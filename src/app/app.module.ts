import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
// 路由
// import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './button/button.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedComponent } from './shared/shared.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UIRouterModule, UIRouter, Transition } from '@uirouter/angular';
import { StateTree, visualizer } from '@uirouter/visualizer';
import { PeopleService } from '../shared/people.service';


const INITIAL_COMPONENTS = [AppComponent, SharedComponent, DashboardComponent, ButtonComponent,
  SelectionListComponent, StepperComponent, FormComponent, PeopleComponent, PersonComponent];

const dashboard = {
  name: 'dashboard', url: '/dashboard', component: DashboardComponent,
  resolve: [
    {
      token: 'people',
      deps: [PeopleService],
      resolveFn: (peopleSvc) => peopleSvc.getAllPeople()
    }
  ]
};
const button = { name: 'button', url: '/button', component: ButtonComponent };
const selectionList = { name: 'selectionList', url: '/selectionList', component: SelectionListComponent };
const stepper = { name: 'stepper', url: '/stepper', component: StepperComponent };
const form = { name: 'form', url: '/form', component: FormComponent };
const people = {
  name: 'people', url: '/people', component: PeopleComponent,
  resolve: [
    {
      token: 'people',
      deps: [PeopleService],
      resolveFn: (peopleSvc) => peopleSvc.getAllPeople()
    }
  ]
};
const person = {
  name: 'person', url: '/people/:personId', component: PeopleComponent,
  resolve: [
    {
      token: 'person',
      deps: [Transition, PeopleService],
      resolveFn: (trans, peopleSvc) => peopleSvc.getPerson(trans.params().personId)
    }
  ]
};
@NgModule({
  declarations: INITIAL_COMPONENTS,
  imports: [
    BrowserModule,
    // AppRoutingModule, 原生路由
    HttpModule,
    BrowserAnimationsModule,
    SharedModule, // 抽共用 Material 模組用
    UIRouterModule.forRoot(
      {
        states: [dashboard, button, selectionList, stepper, form, people, person],
        useHash: true,
        config: uiRouterConfigFn
      }
    )
  ],
  providers: [
    { provide: PeopleService, useClass: PeopleService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/** UIRouter Config */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const peopleService = injector.get(PeopleService);
  peopleService.getAllPeople();
  console.log(peopleService.getAllPeople());
  // If no URL matches, go to the `dashboard` state by default
  router.urlService.rules.otherwise({ state: 'dashboard' });

  // 長時間條的
  visualizer(router);
  // Use ui-router-visualizer to show the states as a tree
  // 長樹的
  StateTree.create(router, document.getElementById('statetree'), { width: 400, height: 300 });
}
