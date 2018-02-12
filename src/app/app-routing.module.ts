import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonComponent } from './button/button.component';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { StepperComponent } from './stepper/stepper.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
