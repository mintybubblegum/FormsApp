import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Ladybug',
      canFly: true,
      color: Color.red
    },
    {
      name: 'Kim Possible',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Black Widow',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Pitufina',
      canFly: false,
      color: Color.blue
    },
    {
      name: 'Wonderwoman',
      canFly: true,
      color: Color.red
    }
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ){
    this.orderBy = value;
  }

}
