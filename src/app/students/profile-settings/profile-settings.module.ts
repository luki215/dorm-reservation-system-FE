import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings.component';
import { Routes, RouterModule } from '@angular/router';
import { TranslationsModule } from 'src/app/shared/translations/translations.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
