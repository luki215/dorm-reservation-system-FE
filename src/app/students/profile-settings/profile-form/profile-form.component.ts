import { sexOptions, getSexTranslationString } from './../../../shared/interfaces/user.interface';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFormComponent implements OnInit {
  @Input() set user(user: User) {
    this.form.patchValue(user);
  }

  public sexOptions = sexOptions;
  public getSexTranslationString = getSexTranslationString;

  public form = this.fb.group({
    email: [],
    name: [],
    sex: [],
    allianceEnable: [false],
    switchRoomEnable: [true],
    differentSexOnRoomEnable: [false],
    differentSexOnCellEnable: [false],
    note: []
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  public onSubmit() {}
}
