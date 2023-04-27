import { distinctUntilChanged, from, of } from "rxjs";

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

/*
obs$.pipe(
    distinctUntilChanged() //Imprime solo una vez el 4
).subscribe({
    next: console.log
})
*/

obs2$.pipe(
    distinctUntilChanged((prev, curr) => prev.nombre !== curr.nombre)
).subscribe({next: res => console.log(res)})