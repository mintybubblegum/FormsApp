import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule //cuando usamos routerLink, tenemos que importar este módulo en shared para ser usado
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
