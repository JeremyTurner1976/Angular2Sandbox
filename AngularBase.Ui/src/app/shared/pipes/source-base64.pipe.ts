import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sourceBase64'
})
export class SourceBase64Pipe implements PipeTransform {

  transform(value: string, imageType: string): any {
    return value
      ? "data:image/" + imageType + ";base64," + value
      : null;
  }

}
