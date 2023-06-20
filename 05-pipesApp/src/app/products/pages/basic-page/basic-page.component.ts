import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  public nameLower:string = 'noa';
  public nameUpper: string = 'NOA';
  public fullName: string = 'nOA tRuJiLlO zAmOrA';

  public customDate: Date = new Date();
}
