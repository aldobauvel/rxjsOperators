import { debounceTime, fromEvent, map, mergeAll, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax';

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList)

//Streams

const input$ = fromEvent(textInput,'keyup');

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map( res => ajax.getJSON(`https://api.github.com/search/users?q=${res}`)),
    mergeAll(),
    //pluck('items'),
    map(res => res['items'])
).subscribe( console.log)

