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
      { path: 'students', loadChildren: './students/students.module#StudentsModule', canActivate: [StudentsGuard] },
      { path: 'login', loadChildren: './auth/login.module#LoginModule', canActivate: [LoginGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
