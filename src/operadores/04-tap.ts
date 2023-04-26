import { map, range, tap } from "rxjs";

range(1, 8).pipe(
    tap(res => console.log('antes', res)),//PUEDE ACEPTAR OBSERVER NEXT, COMPLETE, ERROR
    map( res => (res*10)),
    tap({ // sirve para hacer test ya que deja pasar valores y al final completa 
        next: val => console.log('despues: ',val)       ,
        complete: () => console.log('se terminó todo')        
    })
)
.subscribe(console.log)