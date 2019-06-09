import { SideNavService } from './../../../side-nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-switch',
  templateUrl: './sidenav-switch.component.html',
  styleUrls: ['./sidenav-switch.component.scss']
})
export class SidenavSwitchComponent implements OnInit {
  constructor(private sidenavService: SideNavService) {}

  ngOnInit() {}

  public toggleNav() {
    this.sidenavService.toggleState();
  }
}
