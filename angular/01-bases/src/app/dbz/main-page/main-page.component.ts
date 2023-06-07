import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  new: Character = {
    name: 'Kunfu Panda',
    power: 1000
  }

  constructor(){
    //inyeccion de dependencias
  }
}
