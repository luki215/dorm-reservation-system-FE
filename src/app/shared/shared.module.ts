import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslationsModule } from './translations/translations.module';
import { NgModule } from '@angular/core';
import { SidenavSwitchComponent } from './components/header/sidenav-switch/sidenav-switch.component';

@NgModule({
  declarations: [HeaderComponent, SidenavSwitchComponent],
  imports: [MatToolbarModule],
  exports: [TranslationsModule, HeaderComponent]
})
export class SharedModule {}
