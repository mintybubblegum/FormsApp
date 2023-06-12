import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PerCountryComponent } from './country/pages/per-country/per-country.component';
import { PerRegionComponent } from './country/pages/per-region/per-region.component';
import { PerCapitalComponent } from './country/pages/per-capital/per-capital.component';
import { ShowCountryComponent } from './country/pages/show-country/show-country.component';

const routes: Routes = [
    { 
        path: '', 
        component: PerCountryComponent, 
        pathMatch:'full'//primer componente que quiero mostrar cuando accedamos a la website
    },
    { 
        path: 'region', 
        component: PerRegionComponent,
    },    
    { 
        path: 'capital', 
        component: PerCapitalComponent,
    },
    {
        path: 'country/:id',
        component: ShowCountryComponent

    },
    {
        path: '**', //cualquier otro endpoint de los mencionados arriba
        redirectTo: '' //nos llevará a nuestro inicio que en este caso es PerCountryComponent
    }
];

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
