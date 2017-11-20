import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreNom'
})
export class FiltreNomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args && args !== "") {
      return value.filter(collegue => 
        collegue.nom.toLowerCase().includes(args.toLowerCase())
      )
    } else {
      return value
    }
  }

}
