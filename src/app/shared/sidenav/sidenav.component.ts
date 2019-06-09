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
  public sideNavClosed$: Observable<boolean>;

  constructor(private sidenavService: SideNavService) {}

  ngOnInit() {
    this.sideNavClosed$ = this.sidenavService.getState().pipe(map((x) => x === 'closed'));
  }
}
