import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PerCapitalComponent } from './pages/per-capital/per-capital.component';
import { PerCountryComponent } from './pages/per-country/per-country.component';
import { PerContinentComponent } from './pages/per-continent/per-continent.component';
import { ShowCountryComponent } from './pages/show-country/show-country.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    PerCapitalComponent,
    PerCountryComponent,
    PerContinentComponent,
    ShowCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  exports: [
    PerCapitalComponent,
    PerCountryComponent,
    PerContinentComponent,
    ShowCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
