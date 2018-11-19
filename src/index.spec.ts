import {Observable} from "rxjs";
import { first, tap } from "rxjs/operators";
import test from "ava";



test('void observable should call tap', t => {
    const o$: Observable<void> = Observable.create(observer => observer.next());

    return o$.pipe(
        first(),
        tap(() => t.pass())
    );
});