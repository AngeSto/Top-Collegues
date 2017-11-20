import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let str=""
    if(value >0){
      str=`<div class="text-success">+${value}<div>`
    } else if(value<0){
      str=`<div class="text-danger">${value}<div>`
    } else {
      str=value
    }
    
    return str;
  }

}
