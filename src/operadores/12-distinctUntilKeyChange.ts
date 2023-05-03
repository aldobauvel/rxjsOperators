import { distinctUntilKeyChanged, from, of } from "rxjs";

const obs$ = of(1,2,3,4,4,3,2,1);
const Personajes = [
    { nombre: 'nombre1' },
    { nombre: 'nombre1' },
    { nombre: 'nombre2' },
    { nombre: 'nombre3' },
    { nombre: 'nombre4' },
    { nombre: 'nombre4' },
    { nombre: 'nombre3' }
]
const obs2$ = from(Personajes)

obs2$.pipe(
    distinctUntilKeyChanged('nombre') // Hace distincion por la llave proveida {nombre}
   
).subscribe({next: res => console.log(res)})