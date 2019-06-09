import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSwitchComponent } from './sidenav-switch.component';

describe('SidenavSwitchComponent', () => {
  let component: SidenavSwitchComponent;
  let fixture: ComponentFixture<SidenavSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
