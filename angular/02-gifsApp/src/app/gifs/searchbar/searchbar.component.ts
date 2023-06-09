import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
})

export class SearchbarComponent {
//@ViewChild: para que cuando hagamos una búsqueda se elimine el contenido de el searchbar
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>; //! pnon-null assertion operator

  constructor( private gifsService: GifsService ) {}//inyección del servicio global para poder visualizar toda su funcionalidad dentro de nuestro componente
  
  search(type: string){
    
    const valor = this.txtSearch.nativeElement.value;

    if ( valor.trim().length === 0 ) {
      return;
    }
    
    this.gifsService.searchGifs( valor );

    this.txtSearch.nativeElement.value = '';
  }
}