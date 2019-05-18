import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private translations;

  constructor() {
    this.setTranslations();
  }

  public setTranslations() {
    this.translations = require('../../../assets/translations/cs.json');
  }

  public getTranslations(): any {
    return this.translations;
  }
}
