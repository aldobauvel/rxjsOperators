import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: res => console.log(res),
    error: err => console.warn(err),
    complete: () => console.log('terminado')
}

const obs$ = new Observable( subs => {

    subs.next('next1');
    subs.next('next2');
    subs.next('next3');
    /*
    const a = undefined;
    a.nombre = 'Aldo';    
    */

    subs.complete();

})

obs$.subscribe(observer);