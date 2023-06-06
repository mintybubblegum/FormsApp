import { Component } from '@angular/core'

@Component({
    selector: 'app-counter',
    template: `
        <h1> {{ title }} </h1>
        <h3>La base es: <strong>{{ base }}</strong></h3>

        <button (click)="accumulate(base)"> + {{ base }} </button>

        <span> {{ num }}</span>

        <button (click)="accumulate(-base)"> - {{ base }} </button>
    `
})

export class CounterComponent {
    title: string = 'Contador App';
    num  : number = 10
    base : number = 5;

    /*sum() {
        this.num += 1;
    }

    substract() {
        this.num -= 1;
    }*/

    //forma más limpia de hacerlo
    accumulate( value: number ) {
        this.num += value;
    }
}