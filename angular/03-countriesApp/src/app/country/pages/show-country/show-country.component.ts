import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; 
//switchMap: permite recibir observable y regresar otro observable 
//tap: operador que dispara efecto secundario

import { CountryService } from '../../components/services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
})
export class ShowCountryComponent implements OnInit{

  country!: Country[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ){ }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getAlphaCountry( id ) ),
        tap( console.log )
      )
      .subscribe( country => this.country = country );

      
    /* this.activatedRoute.params
      .subscribe( ({ id }) => {
        console.log( id );

        this.countryService.getAlphaCountry( id )
          .subscribe( country => {
            console.log( country );
          });
      }); */
  }
  event(){
      console.log(this.country[0].name.common);
      
  }

}
