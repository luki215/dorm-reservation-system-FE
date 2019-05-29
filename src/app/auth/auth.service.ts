import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { User, LoginRequest, LoginResponse } from './auth.interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private me = new ReplaySubject<User>(1);

  constructor(private httpClient: HttpClient, private router: Router) {
    this.me.next(JSON.parse(window.localStorage.getItem('user')));
  }

  public login(params: LoginRequest): Observable<void> {
    return this.httpClient.post<LoginResponse>(environment.apiUrl + 'login', params).pipe(
      map((res) => {
        window.localStorage.setItem('auth_token', res.token);
        window.localStorage.setItem('user', JSON.stringify(res.user));
        this.me.next(res.user);
        this.router.navigate(['/']);
        return null;
      })
    );
  }

  public logout() {
    window.localStorage.clear();
    this.me.next(null);
    this.router.navigate(['/']);
  }

  public getMe(): Observable<User> {
    return this.me.asObservable();
  }
}
