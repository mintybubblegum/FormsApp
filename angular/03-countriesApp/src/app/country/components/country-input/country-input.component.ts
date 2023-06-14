import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html'
})
export class CountryInputComponent implements OnInit {
  
  //a los eventos se le pone el on en el nombre
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject(); //la intención es que se emita cuando dejo de escribir
  
  term: string = '';

  ngOnInit(): void {
    this.debouncer
    .pipe(    //tuberia que me permite transformar la salida del subscribe
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit( value );
      });
  }

  search() {
    this.onEnter.emit(this.term); //para emitir el texto de busqueda en nuestra app
  }

  pressedKey(){
    this.debouncer.next( this.term ); //este debouncer ya está conectado y va a llamar al next que está suscrito en el ngOnInit. Va a recibir el nuevo valor y se va a imprimir la tecla que presionemos en cada momento, una por una 
  }
}
