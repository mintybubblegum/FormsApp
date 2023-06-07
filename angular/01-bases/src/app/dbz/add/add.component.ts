import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() new: Character = {
    name: '',
    power: 0
  }

  constructor(private dbzService: DbzService) {}
/* para no añadir nada a menos que el campo requerido esté relleno */

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(){
    if ( this.new.name.trim().length === 0 ) {
      return;//salte de este metodo=nohagas nada
    }
    //this.onNewCharacter.emit( this.new );
    this.dbzService.addCharacter( this.new );

    this.new = {
      name: '',
      power: 0
    }
    
  }
}


