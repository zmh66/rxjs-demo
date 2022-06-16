import React, { useEffect } from 'react';
import { useObservable } from 'rxjs-hooks'
import { interval, timeout } from 'rxjs'
import { map } from 'rxjs/operators'

export default ({ num }) => {

  const val = useObservable((_, inputs$) => {
    const slow$ = interval(3000);
    const fast$ = interval(1000);
    return slow$.pipe(
      timeout({
        each: 2000,
        with: () => fast$,
      }),
      map((v) => v * inputs$.getValue()[0])
    );
  }, 0, [num]);


  useEffect(() => {
    console.log('在case05中监听', val);
  }, [val]);
	
	return (
    <>
      <h2>case05</h2>
      <p>{val}</p>
    </>
  );
}