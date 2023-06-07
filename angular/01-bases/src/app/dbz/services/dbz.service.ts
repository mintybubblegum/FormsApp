import { Injectable } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Injectable() //no se va a ejecutar hasta que alguien lo requiera

export class DbzService{

    //_nombre para entender que es un array privado
    private _characters: Character[] = [
        {
        name: 'Black Widow',
        power: 25000
        },
        {
        name: 'Kim Possible',
        power: 7000
        }
    ];

    get characters(): Character[] {
        return [...this._characters];
    }

    constructor(){
        //siempre se usa el mismo servicio una vez que se ejecuta, ya que es un lugar centralizado en el cual vamos a tener nuestra informacion
    }

    addCharacter( newCharacter: Character) {
        //añadir personaje a listado
        this._characters.push( newCharacter );
    }
}

//si el main page iniciera modificaciones al servicio, todos los comonentes hijos recibiran informacion actualizada