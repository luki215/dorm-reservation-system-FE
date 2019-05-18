import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}
  transform(value: string, lang: string = '') {
    const translations = this.translate.getTranslations();
    if (translations && translations.hasOwnProperty(value)) {
      return translations[value];
    } else {
      return value;
    }
  }
}
