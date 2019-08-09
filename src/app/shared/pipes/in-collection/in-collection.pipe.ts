import { Pipe, PipeTransform } from '@angular/core';
import { AppUtils } from '@core/app-utils';

@Pipe({
  name: 'inCollection'
})
export class InCollectionPipe implements PipeTransform {

  transform(ids:Array<number | string>,video:any): any {
    let id = AppUtils.filterVideoId(video);
    return ids.indexOf(id) > -1;
  }
}
