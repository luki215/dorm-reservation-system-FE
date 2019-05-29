import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { first, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.getMe().pipe(
      first(),
      map((x) => x !== null && !x.admin),
      tap((x) => {
        if (!x) this.router.navigate(['/']);
      })
    );
  }
}
