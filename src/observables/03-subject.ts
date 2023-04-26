
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next : value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( 
      () => subs.next( Math.random() ), 1000 
    );

    return () => {
        clearInterval( intervalID );
        console.log('Intervalo destruido')
    };

});

/**
 * 1.- Casteo multiple : muchas subscripciones van a estar sujetas a este mismo subject y va a servir para distribuir la misma info a todos los lugares donde esten suscritos
 * 2.- tambien es un observer
 * 3.- Al ser un observer tambien puede manejar next, error, complete
 */

//Declaracion de subject
const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );


// const subs1 = obs$.subscribe( res => console.log('subs1', res)) //imprime numero random
// const subs2 = obs$.subscribe( res => console.log('subs2', res)); // imprime numero random distinto al subs1
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout( () => {

    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500 );

