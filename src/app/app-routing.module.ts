import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './button/button.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  },
  {
    path: 'selectionList',
    component: SelectionListComponent
  },
  {
    path: 'stepper',
    component: StepperComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
