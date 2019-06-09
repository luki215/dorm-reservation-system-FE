import { AuthService } from 'src/app/auth/auth.service';
import { User } from './../../shared/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  public me$: Observable<User>;
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.me$ = this.auth.getMe();
  }
}
