import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {

  public switchesForm: FormGroup = this.fb.group({
    gender: ['F', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  })

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.switchesForm.reset( this.person )
  }

  //si el mensaje de validaciones solo tiene una condición utilizaremos isNotValidField + ngIf en HTML
  isNotValidField(field: string): boolean | null {
    return this.switchesForm.controls[field].errors
    && this.switchesForm.controls[field].touched;
  }
  
  //ngSubmit
  onSave() {

    if ( this.switchesForm.invalid ) {
      this.switchesForm.markAllAsTouched();
      return;
    }


    const { termsAndConditions, ...newPerson } = this.switchesForm.value;

    this.person = newPerson;
    console.log(this.switchesForm.value);
    console.log(this.person);
    
    

  }
}
