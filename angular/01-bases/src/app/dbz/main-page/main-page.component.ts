import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Black Widow',
      power: 25000
    },
    {
      name: 'Kim Possible',
      power: 7000
    }
  ];

  new: Character = {
    name: 'Kunfu Panda',
    power: 1000
  }

  addNewCharacter(arg: Character) {
    this.characters.push(arg);
  }
}
