import { Component } from '@angular/core';
import { CountryService } from '../../components/services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-country', 
  templateUrl: './per-country.component.html',
})
export class PerCountryComponent {
  term      : string    = '';
  hayError  : boolean   = false;
  countries : Country[] = [];

  constructor( private countryService: CountryService) {}

  search( term: string ) {
    this.hayError = false;
    this.term     = term;

    this.countryService.searchCountry( this.term )
      .subscribe((countries) => {
        console.log(countries);//para conectar observable + searchbar + api data
        this.countries= countries;
        
      }, (err) => {
        this.hayError  = true;
        this.countries = [];
      });
  }

  suggestions( term: string ) {
    this.hayError = false;
    //TODO crear suggestions
  }
}
