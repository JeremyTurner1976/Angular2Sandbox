import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitedDisplay',
  pure: false //stateful pipe (Watches for changes)
})
export class LimitedDisplayPipe implements PipeTransform {

  transform(value: any[], limit: number, sortProperty: string, sortType: string = "string", sortOrder: string = "asc"): any[] {
    if(sortProperty && sortProperty.length){
      let sortAscending = sortOrder.indexOf("desc") === -1;

      switch(sortType){
        case "number":
            return value.sort((a: any, b: any) => {
              if (a[sortProperty] < b[sortProperty]) {
                return sortAscending ? -1 : 1;
              }
              if (a[sortProperty] > b[sortProperty]) {
                return sortAscending ? 1 : -1;
              }
              return 0;
            }).slice(0, limit);
        case "string":
        default:
            return value.sort((a: any, b: any) => {
              var sortValueOne = (a[sortProperty] || "").toString().toUpperCase();
              var sortValueTwo = (b[sortProperty] || "").toString().toUpperCase();
              if (sortValueOne < sortValueTwo) {
                return sortAscending ? -1 : 1;
              }
              if (sortValueOne > sortValueTwo) {
                return sortAscending ? 1 : -1;
              }
              return 0;
            }).slice(0, limit);
      }
    }
  }


}
