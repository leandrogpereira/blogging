import { Pipe, PipeTransform } from '@angular/core';
import { Month } from './month.enum';

@Pipe({
  name: 'localeDateTime'
})
export class LocaleDateTimePipe implements PipeTransform {

  transform(value: string): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }
    
    const day = value.substring(8,10);
    const month = value.substring(5,7);
    const year = value.substring(0,4);
    const hour = value.substring(11,13);
    const minute = value.substring(14,16);

    return day + ' ' + Month[Number(month)] + ' ' + year + ', às ' + hour + 'h' + minute;
  }


}
