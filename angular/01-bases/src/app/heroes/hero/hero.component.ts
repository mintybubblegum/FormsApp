import { Component } from "@angular/core";


@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent{
    name: string = 'Black Widow';
    age: number = 32

    get nameUpperCase(): string{
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${ this.name } - ${ this.age }`;
    }

    changeName():void {
        this.name = 'Wonderwoman';
    }

    editAge(): void {
        this.age = 30;
    }
}