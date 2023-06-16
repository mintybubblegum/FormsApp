import { Component } from '@angular/core';
import { CountryService } from '../../components/services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-country', 
  templateUrl: './per-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PerCountryComponent {
  term      : string    = '';
  hayError  : boolean   = false;
  countries : Country[] = [];

  suggestedCountries: Country[] = [];
  showSuggestions   : boolean = false;

  constructor( private countryService: CountryService) {}

  search( term: string ) {
    this.hayError = false;
    this.term     = term;

    this.countryService.searchCountry( term )
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
    this.term     = term;
    this.showSuggestions =  true;
    
    this.countryService.searchCountry(term)
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0,5),
        (err) => this. suggestedCountries = [] 
      );
  }

  searchSuggested( term: string ){
    this.search( term );
  }
}
