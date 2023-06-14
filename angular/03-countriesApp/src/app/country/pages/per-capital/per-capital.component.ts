import { Component } from '@angular/core';
import { CountryService } from '../../components/services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-per-capital',
  templateUrl: './per-capital.component.html',
})
export class PerCapitalComponent {
  term      : string    = '';
  hayError  : boolean   = false;
  countries : Country[] = [];

  constructor( private countryService: CountryService) {}

  search( term: string ) {
    this.hayError = false;
    this.term     = term;

    this.countryService.searchCapital( term )
      .subscribe((countries) => {
        console.log(countries);//para conectar observable + searchbar + api data
        this.countries= countries;
        
      }, (err) => {
        this.hayError  = true;
        this.countries = [];
      });
  }
}
