import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './dynamic-page.component.html',
})
export class DynamicPageComponent {

  //estructura inicial del formulario
  public myDynamicForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ] ],
    favouriteGames: this.fb.array([
      ['Crash Bandicoot', Validators.required],
      ['Tekken 3', Validators.required],
    ])
  })

  constructor( private fb:FormBuilder ){}

  get favouriteGamesControls(){
    return this.myDynamicForm.get('favouriteGames') as FormArray;
  }

  onSubmit():void{

    if ( this.myDynamicForm.invalid ) {
      this.myDynamicForm.markAllAsTouched();
      return;
    }

    console.log(this.myDynamicForm.value);
    this.myDynamicForm.reset();
    

  }

}
