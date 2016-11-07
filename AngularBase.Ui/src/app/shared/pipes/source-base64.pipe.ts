import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sourceBase64'
})
export class SourceBase64Pipe implements PipeTransform {

  transform(value: string, args?: string): any {
    return "data:image/" + args + ";base64," + value;
  }

}
