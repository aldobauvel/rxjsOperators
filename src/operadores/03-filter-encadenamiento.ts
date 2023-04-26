import { filter, from, of, range, pluck } from 'rxjs';

/*
range(1, 10).pipe(
    filter( (val, index) => {
        console.log(`index: ${index}`);        
        return val % 2 === 1
    }) // condicion que returna true o false
).subscribe(console.log)
*/
const personajes = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'flash'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];

from(personajes).pipe(
    filter((val, index ) => {
        return ( val.tipo === 'villano')        
    }),
    pluck('nombre')
)
.subscribe(
    res => console.log(res)    
)