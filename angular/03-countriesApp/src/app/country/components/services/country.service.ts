import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

//los services son singleton que están habilitados globalmente en la app, por lo que no hay que importarlos en ningun sitio

//el service es donde se almacenan los métodos

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchCountry( term: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>( url )
  }

  searchCapital( term: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url )
  }

  getAlphaCountry( id: string ): Observable<Country>{

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url )
  }

  searchContinent( region: string ): Observable<Country[]>{

    //para filtrar datos de la API usamos este endpoint customizado en Postman:
    //?fields=name,capital,cca2,flag,population;

/*     const params = new HttpParams()
      .set( 'fields', 'name,capital,cca2,flag,population;' ) */ //añadir, { params } en el return despues de url

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url )
            .pipe(
              tap( console.log )
            )
  }

}
