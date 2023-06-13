import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//los services son singleton que están habilitados globalmente en la app, por lo que no hay que importarlos en ningun sitio

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchCountry( term: string ): Observable<any>{

    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get( url )
  }

}
