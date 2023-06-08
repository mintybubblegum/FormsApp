import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _history: string[] = [];

  get history(){
    return [...this._history]; //operador spread: opera y devuelve en nuevo arreglo sin afectar al original
  }

  searchGifs( query: string ) {

    //para que en nuestro historial no se repitan los resultados
    if( !this._history.includes( query ) ) {
      this._history.unshift( query ); //añade nuevo nombre que hemos puesto en la barra de búsqueda en nuestra sidebar_history
    }

    this._history = this._history.splice(0,10); //limita la vista de nuestro historial a 10

    console.log(this._history);
  }
}
