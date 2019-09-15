import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
  name:'Shorten'

})
export class shortenPipe implements PipeTransform{

  transform(value: any , limit : number) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }


}
