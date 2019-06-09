import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export type SideNavState = 'open' | 'closed';
@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private state = new BehaviorSubject<SideNavState>('closed');
  constructor() {}

  public setState(newState: SideNavState): void {
    this.state.next(newState);
  }

  public getState(): Observable<SideNavState> {
    return this.state.asObservable();
  }

  public toggleState() {
    this.state.next(this.state.value === 'open' ? 'closed' : 'open');
  }
}
