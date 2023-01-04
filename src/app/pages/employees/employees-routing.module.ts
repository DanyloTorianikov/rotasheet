import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'performance',
    pathMatch: 'full',
  },
  {
    path: 'performance',
    loadChildren: () => import('./performance/performance.module').then(m => m.PerformanceModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }