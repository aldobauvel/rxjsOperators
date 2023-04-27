import { of, take, tap } from "rxjs";

const obs$ = of(1,2,3,4,5);

obs$.pipe(
    take(3)
)
.subscribe({
    next: res => console.log(res),
    complete: () => console.log('complete')
}   
)