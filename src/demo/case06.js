import React from "react";
import { useEventCallback } from "rxjs-hooks";
import { map, withLatestFrom } from "rxjs/operators";

export default () => {
  const [clickCallback, [description, x, y, prevDescription]] = useEventCallback(
    (event$, state$) =>
      event$.pipe(
        withLatestFrom(state$),
        map(([event, state]) => [
          event.target.innerHTML,
          event.clientX,
          event.clientY,
          state[0],
        ])
      ),
    ["nothing", 0, 0, "nothing"]
  );

  return (
    <>
      <h2>case06</h2>
      <h3>
        点击位置: {x}, {y}
      </h3>
      <h3>"{description}" 被点击了</h3>
      <h3>"{prevDescription}" 上一次被点击了.</h3>
      <button onClick={clickCallback}>click me</button>
      <button onClick={clickCallback}>click you</button>
      <button onClick={clickCallback}>click him</button>
    </>
  );
}