import { Observable, debounceTime, fromEvent, map, mergeAll, pluck, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GitHubResponse, GitHubUser } from '../interface/GitHubResponse.interface';

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList)

//Streams

const input$ = fromEvent<KeyboardEvent>(textInput,'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    //pluck('target', 'value'),
    map<KeyboardEvent, string>(res => res.target['value']),
    map<string, Observable<GitHubResponse>>( res => ajax.getJSON(`https://api.github.com/search/users?q=${res}`)),
    mergeAll(),
    //pluck('items'),
    map<GitHubResponse, GitHubUser[]>(res => res.items)
)
//.subscribe( console.log)

//usando switchMap
//usando switchMap
//usando switchMap

const url = 'https://httpbin.org/delay/1?arg?=';

input$.pipe(
    //pluck('target','value'),
    map<KeyboardEvent, string>( res => res.target['value']),
    switchMap( texto => {
        return ajax.getJSON(url + texto) // al recibir valor de input cancela y emite nuevo observable
    })
)
.subscribe(console.log)


