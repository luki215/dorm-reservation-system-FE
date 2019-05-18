import { TranslationsModule } from './../../shared/translations/translations.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MatToolbarModule, MatCardModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatToolbarModule, MatCardModule, TranslationsModule]
})
export class DashboardModule {}
