import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });
  public loading: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  public onSubmit() {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.authService
        .login({ email: this.form.get('email').value, password: this.form.get('password').value })
        .pipe(finalize(() => (this.loading = false)))
        .subscribe(
          () => {},
          (err: HttpErrorResponse) => {
            if (err.status === 401) this.form.setErrors({ beErrors: ['Incorrect username/password'] });
            else this.form.setErrors({ beErrors: ['Unknown error'] });
          }
        );
    }
  }
}
