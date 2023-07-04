import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationsService } from 'src/app/shared/service/validations.service';
import { EmailValidation } from 'src/app/shared/validations/email-validation.service';


@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public registerForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validationsService.firstNameAndLastnamePattern )  ]],
    // email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )], [ new EmailValidator() ]],
    email: ['', [ Validators.required, Validators.pattern( this.validationsService.emailPattern )], [ this.emailValidation ]],
    username: ['', [ Validators.required, this.validationsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]]
  })


  constructor( 
    private fb: FormBuilder,
    private validationsService: ValidationsService,
    private emailValidation:EmailValidation
    ) {}

  //para que se desaparezcan los validationErrors y sólo aparezcan cuando se pulse 'crear'. Se añade en cada span de register-page.component.html
  isNotValidField( field: string ) {
    return this.validationsService.isNotValidField( this.registerForm, field );
  }

  onSubmit() {
    this.registerForm.markAllAsTouched();
  }
}
