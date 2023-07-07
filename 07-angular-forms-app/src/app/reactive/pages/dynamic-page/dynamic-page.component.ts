import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  public newFavourite: FormControl = new FormControl('', Validators.required);

  constructor( private fb:FormBuilder ){}

  get favouriteGamesControls(){
    return this.myDynamicForm.get('favouriteGames') as FormArray;
  }

  isNotValidField(field: string): boolean | null {
    return this.myDynamicForm.controls[field].errors
    && this.myDynamicForm.controls[field].touched;
  }

  isValidFieldInArray ( formArray: FormArray, index: number ) {
    return formArray.controls[index].errors
    && formArray.controls[index].touched;
  }

  getFieldError(field: string): string | null {

    if ( !this.myDynamicForm.controls[field] ) return null;

    const errores = this.myDynamicForm.controls[field].errors || {};

    for (const key of Object.keys(errores)) {
      switch( key ) {
        case 'required':
          return 'Field required';

          case 'minlength':
            return `This field need a minimum of ${ errores['minlength'].requiredLength } characters.`;
      }
    }

    return null;
  }

  onAddToFavourites():void {

    if ( this.newFavourite.invalid ) return;
    const newGame = this.newFavourite.value;

    //this.favouriteGamesControls.push( new FormControl( newGame, Validators.required ) );
    this.favouriteGamesControls.push(
      this.fb.control( newGame, Validators.required )
    );

    this.newFavourite.reset();

  }

  onDeleteFavourite( index: number ):void {
    this.favouriteGamesControls.removeAt(index);
  }

  onSubmit():void{

    if ( this.myDynamicForm.invalid ) {
      this.myDynamicForm.markAllAsTouched();
      return;
    }

    console.log(this.myDynamicForm.value);
    //para eliminar campos de favoritos cuando ya se ha pulsado botón guardar
    (this.myDynamicForm.controls['favouriteGames'] as FormArray ) = this.fb.array([]);
    this.myDynamicForm.reset();
  }

}
