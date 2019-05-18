import { SideNavService } from '../side-nav.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public sideNavOpen$: Observable<boolean>;

  constructor(private sidenavService: SideNavService) {}

  ngOnInit() {
    this.sideNavOpen$ = this.sidenavService.getSideNavState().pipe(map((x) => x === 'open'));
  }
}
