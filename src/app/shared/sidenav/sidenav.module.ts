import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';
import { SidenavComponent } from './sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const declareAndExport = [SidenavComponent, SidenavItemComponent];
@NgModule({
  declarations: declareAndExport,
  exports: declareAndExport,
  imports: [CommonModule, RouterModule]
})
export class SidenavModule {}
