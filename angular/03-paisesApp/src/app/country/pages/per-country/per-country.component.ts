import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-per-country',
  templateUrl: './per-country.component.html',
})
export class PerCountryComponent {
  term    : string = '';
  hayError: boolean = false;

  constructor( private countryService: CountryService) {}

  search() {
    this.hayError = false;
    console.log(this.term); //posteo/impresion del formulario

    this.countryService.searchCountry( this.term )
      .subscribe((resp) => {
        console.log(resp);//para conectar observable + searchbar + api data
      }, (err) => {
        this.hayError = true;
      });
  }

}
