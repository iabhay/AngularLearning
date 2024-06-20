import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length == 0 || filterString === ''){
      return value.sort(this.compareByName);
    }

    const resultArray = [];
    for(const item of value){
      if(item[propName] === filterString){
        // item[propName] =  item[propName].split('').reverse().join('');
        resultArray.push(item);
      }
    }
    return resultArray.sort(this.compareByName);
  }

  compareByName(a,b){
    return a.name.localeCompare(b.name);
  }
}
