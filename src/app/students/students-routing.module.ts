import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('./reservations/reservations.module').then((m) => m.ReservationsModule)
      },
      {
        path: 'profile-settings',
        loadChildren: () => import('./profile-settings/profile-settings.module').then((m) => m.ProfileSettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}
