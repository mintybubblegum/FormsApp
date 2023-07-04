import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidation implements AsyncValidator {

    validate( control: AbstractControl ): Observable<ValidationErrors | null> {

        const email = control.value;
        
        const httpCallObservable = new Observable<ValidationErrors | null> ((subs) => {
        
            console.log({ email });

            if ( email === 'noa.trujillo@bosonit.com' ) {
                subs.next({ emailTaken: true });
                subs.complete();
                //return;
            }
            
            subs.next(null); //si la persona introduce algún email que no sea 'noa.trujillo@bosonit.com' === no existe/no está tomado
            subs.complete();
        }).pipe (
            delay ( 3000 )
        )

        return httpCallObservable;
    }

    //

    /* validate( control: AbstractControl ): Observable<ValidationErrors | null> {

        const email = control.value;
        console.log({ email });
        

        return of ({
            emailTaken: true
        }). pipe(
            delay( 2000 )
            );
    } */
    
}