import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { TranslationsModule } from '../shared/translations/translations.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatInputModule,
    TranslationsModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class LoginModule {}
