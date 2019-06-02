import { LoginGuard } from './shared/guards/login.guard';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootGuard } from './shared/guards/root.guard';
import { StudentsGuard } from './shared/guards/students.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: AppComponent, pathMatch: 'full', canActivate: [RootGuard] },
      { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule), canActivate: [StudentsGuard] },
      { path: 'login', loadChildren: () => import('./auth/login.module').then(m => m.LoginModule), canActivate: [LoginGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
