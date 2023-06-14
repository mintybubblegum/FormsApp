import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

//los services son singleton que están habilitados globalmente en la app, por lo que no hay que importarlos en ningun sitio

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }
//<any>este tipo de simbolos no crea una instancia, sólo le dice a ts de qué tipo es el documento
  searchCountry( term: string ): Observable<Country[]>{
    //<Country[]> aqui podemos encontrar el tipado que se corresponde con el array de objetos de nuestra BBDD y sustituye al <any> anterior
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>( url )
  }

  searchCapital( term: string ): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url )
  }
}
