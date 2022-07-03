import { Pipe, PipeTransform } from '@angular/core';
import { Month } from './month.enum';

@Pipe({
  name: 'localeDate'
})
export class LocaleDatePipe implements PipeTransform {

  transform(value: string): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }

    const day = value.substring(8,10);
    const month = value.substring(5,7);
    const year = value.substring(0,4);;

    return day + ' de ' + Month[Number(month)] + ', ' + year;
  }

}
