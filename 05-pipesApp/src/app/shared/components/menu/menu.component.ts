import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
            { label: 'Angular Pipes', 
              icon: 'pi pi-desktop',
              items: [
                { 
                  label: 'Dates and text', 
                  icon: 'pi pi-align-left'
                },
                { 
                  label: 'Numbers', 
                  icon: 'pi pi-dollar'
                },
                { 
                  label: 'Not common', 
                  icon: 'pi pi-globe'
                }
              ]
            },
            { 
              label: 'Custom Pipes', 
              icon: 'pi pi-cog',
              items: [
                { 
                  label: 'Custom Pipes', 
                  icon: 'pi pi-cog'
                }
              ]
            }

        ];
    }

}
