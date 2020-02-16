import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string) {
    if (value.length > 50) {
      return `${value.substr(0, 67)}`;
    }
    return value;
  }
}
