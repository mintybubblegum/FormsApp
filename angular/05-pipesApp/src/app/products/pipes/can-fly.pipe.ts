import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

    transform(value: boolean ): 'can fly'|'cannot fly' {
        return value ? 'can fly' : 'cannot fly';
    }
}