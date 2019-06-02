import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslationsModule } from './../../shared/translations/translations.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';

@NgModule({
  declarations: [ReservationsComponent],
  imports: [CommonModule, ReservationsRoutingModule, MatToolbarModule, TranslationsModule]
})
export class ReservationsModule {}
