import { distinct, of } from "rxjs";

 const obs$ = of(
    {age: 22, nombre:'leonardo'},
    {age: 18, nombre:'victor'},
    {age: 25, nombre:'carlos'},
    {age: 22, nombre:'javier'},
    {age: 22, nombre:'marcelo'},
    );

    obs$.pipe(
        distinct(({age}) => age)
    )
    .subscribe({
        next: res => console.log(res),
        complete: () => console.log('terminado')       
        
    });