import React, { useEffect } from 'react';
import { interval } from 'rxjs';
import { useObservable } from 'rxjs-hooks';

export default () => {
  
	const val = useObservable(() => interval(1000), 0);

  useEffect(() => {
    console.log('在case02中监听', val);
  }, [val]);
	
	return (
    <>
      <h2>case02</h2>
      <p>{val}</p>
    </>
  );
}