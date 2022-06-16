import React, { useState, useEffect } from 'react';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

export default () => {

  const [ val, setVal] = useState(0);

  useEffect(() => {
    const observable = interval(1000).pipe(
      tap((val) => setVal(val))
    );
    const subscribe = observable.subscribe(x => {
      // console.log('x', x)
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log('在Case01中监听', val);
  }, [val]);

  return (
    <>
      <h2>Case01</h2>
      <p>{val}</p>
    </>
  );
};
