import { PipeTransform, Pipe } from '@angular/core';
import { IPlate } from '../plate/plate';

@Pipe({
    name:'plateFilter'
})
export class PlateFilterPipe implements PipeTransform{
    transform(value: IPlate[], filterBy: string): IPlate[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((plate: IPlate) =>
            plate.plateNumber.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}