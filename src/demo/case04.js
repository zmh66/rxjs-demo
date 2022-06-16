import React, { useEffect } from 'react';
import { useObservable } from 'rxjs-hooks';
import { interval, timeout, withLatestFrom, map } from 'rxjs';

export default () => {

  const val = useObservable(() => {
    const slow$ = interval(3000);
    const fast$ = interval(1000);
    return slow$.pipe(
      timeout({
        each: 2000,
        with: () => fast$,
      })
    );
  }, 0);

  useEffect(() => {
    console.log('在case04中监听', val);
  }, [val]);
	
	return (
    <>
      <h2>case04</h2>
      <p>{val}</p>
    </>
  );
}