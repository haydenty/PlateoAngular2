import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'filterList'
})
//TODO: add parameter for n properties, only implments 2 properties as of now - how to make more generic
export class FilterListPipe implements PipeTransform{
    transform(value: any[], filterBy: string): any[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((item: any) =>
            item.propA.toString().toLocaleLowerCase().indexOf(filterBy) !== -1 
            || item.propB.toString().toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}