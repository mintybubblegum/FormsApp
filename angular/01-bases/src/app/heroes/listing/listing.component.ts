import { Component } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
})
export class ListingComponent {
  heroes:  string[] = ['Wonderwoman', 'Black Widow', 'Xena', 'Kim Possible', 'Samantha Hudson'];
  deletedHero: string = '';

  deletingHero(){
    this.deletedHero = this.heroes.shift() || '';
  }
}


