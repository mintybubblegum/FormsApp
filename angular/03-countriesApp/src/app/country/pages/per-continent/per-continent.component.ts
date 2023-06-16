import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../components/services/country.service';

@Component({
  selector: 'app-per-continent',
  templateUrl: './per-continent.component.html',
  styles: [`
    button {
      margin-right: 5px;
    } 
  `]
})
export class PerContinentComponent {
  continents: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activatedContinent: string = '';
  countries: Country[] = [];

  constructor( private countryService: CountryService) {}//para consumir servicios hay que inyectarlos en el constructor

  //para que el botón clickado sea el único que se ponga azul
  getCSSClass( region: string ):string {
    return (region === this.activatedContinent) 
              ? 'btn btn-primary'
              : 'btn btn-outline-primary';
  }

  initializeContinent( region: string){

    if ( region === this.activatedContinent ) { return }; // para que cuando haga click no se vuelva a recargar la lista de continentes

    this.activatedContinent = region;
    this.countries = [];

    this.countryService.searchContinent( region ) 
      .subscribe( countries => this.countries = countries );
  }
}