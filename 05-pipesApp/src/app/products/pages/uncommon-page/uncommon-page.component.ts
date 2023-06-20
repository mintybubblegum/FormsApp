import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Noa';
  public gender: 'female'|'male'|'Prefer not to say' = 'female';
  public invitationMap = {
    female: 'invitarla',
    male: 'invitarlo'
  }

  changeClient():void {
    this.name = 'Miles';
    this.gender = 'male';
}
}
