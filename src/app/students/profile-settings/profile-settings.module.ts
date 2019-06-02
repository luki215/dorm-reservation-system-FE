import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Routes, RouterModule } from '@angular/router';
import {
  MatToolbarModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatRadioModule,
  MatSlideToggleModule
} from '@angular/material';
import { TranslationsModule } from 'src/app/shared/translations/translations.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSettingsComponent
  }
];

@NgModule({
  declarations: [ProfileSettingsComponent, ProfileFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    TranslationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class ProfileSettingsModule {}
