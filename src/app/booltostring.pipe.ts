import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booltostring'
})
export class BooltostringPipe implements PipeTransform {

  transform(input: boolean, boolToStringArr: any): string {
    return input?boolToStringArr[1]:boolToStringArr[2];
  }
}
