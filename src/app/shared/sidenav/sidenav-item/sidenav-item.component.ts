import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  template: `
    <ng-content></ng-content>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
