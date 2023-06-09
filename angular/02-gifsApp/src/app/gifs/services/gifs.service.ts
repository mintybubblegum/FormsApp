import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'uDUPkBbTp0PUfr3VI1xWvjOfHZ8M7gfx';
  private _history: string[] = [];

  //para almacenar data
  public results: Gif[] = [];

  get history(){
    return [...this._history]; //operador spread: opera y devuelve en nuevo arreglo sin afectar al original
    //lo que hacemos con el spread operator es romper la relación haciendo un array nuevo en el return porque que si cambiamos propiedades de nuestro getter history puede cambiar las propiedades de nuestro array original
  }

  constructor( private http: HttpClient ){}

  searchGifs( query: string = '' ) {

    query = query.trim().toLocaleLowerCase();

    //para que en nuestro historial no se repitan los resultados
    if( !this._history.includes( query ) ) {
      this._history.unshift( query ); //añade nuevo nombre que hemos puesto en la barra de búsqueda en nuestra sidebar_history
    }

    //se hacen peticiones HTTP en base a observables
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=uDUPkBbTp0PUfr3VI1xWvjOfHZ8M7gfx&q=${ query }&limit=10`)
      .subscribe(( response ) => {
        console.log(response.data);
        this.results = response.data;
      })

    this._history = this._history.splice(0,10); //limita la vista de nuestro historial a 10

    
  }
}
