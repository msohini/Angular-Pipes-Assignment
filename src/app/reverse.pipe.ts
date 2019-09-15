import { Pipe, PipeTransform } from '@angular/core';
import { reverse } from 'dns';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
   let reverseString = '';
    reverseString = value.split('').reverse().join('');
    return reverseString;
  }

}
