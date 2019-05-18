import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export type SideNavState = 'open' | 'closed';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  state = new BehaviorSubject<SideNavState>('open');
  constructor() {}

  public setSideNavState(newState: SideNavState): void {
    this.state.next(newState);
  }

  public getSideNavState(): Observable<SideNavState> {
    return this.state.asObservable();
  }
}
