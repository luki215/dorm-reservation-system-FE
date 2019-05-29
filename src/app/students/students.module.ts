import { SidenavModule } from './../shared/sidenav/sidenav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { TranslationsModule } from '../shared/translations/translations.module';

@NgModule({
  declarations: [StudentsComponent],
  imports: [CommonModule, StudentsRoutingModule, SidenavModule, TranslationsModule]
})
export class StudentsModule {}
