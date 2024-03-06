import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kisalt'
})
export class YaziKisaltPipe implements PipeTransform {

  transform(value: string, uzunluk: number = 10): string {
    if (value.length > uzunluk) {
      value = value.substring(0, uzunluk - 3) + '...';
    } 
    return value;
  }

}
