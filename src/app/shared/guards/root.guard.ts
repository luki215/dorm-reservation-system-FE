import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RootGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.getMe().pipe(
      first(),
      tap((res) => {
        if (res === null) {
          this.router.navigate(['/login']);
        } else if (!res.admin) {
          this.router.navigate(['/students']);
        }
      }),
      map((x) => true)
    );
  }
}
