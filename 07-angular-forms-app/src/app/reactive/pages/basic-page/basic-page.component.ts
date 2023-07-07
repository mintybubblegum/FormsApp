import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

const product = {
  name: 'Conga',
  price: 159,
  inStorage: 6,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

  /* public myForm: FormGroup = new FormGroup({
    name: new FormControl(''), //1-valor por defecto 2-validaciones sincronas 3-validaciones asincronas
    price: new FormControl(0),
    inStorage: new FormControl(0),
  }); */

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ],
    price: [0, [Validators.required, Validators.min(0)] ],
    inStorage: [0, [Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder ){}

  ngOnInit(): void {
    /* this.myForm.reset( product ); */
  }

  isNotValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
    && this.myForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {

    if ( !this.myForm.controls[field] ) return null;

    const errores = this.myForm.controls[field].errors || {};

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

  onSave():void {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched(); //esto sirve para que se activen todos los mensajes de error en nuestro formulario cuando presionamos el botón 'guardar'
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 })
    
  }

}
