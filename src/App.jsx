import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/slices/counterSlice";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        Increase by 5
      </button>
      <br />
      <input
        value={num}
        onChange={(e) => setNum(e.target.value)}
        type="number"
      />
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
        Increase by Amount
      </button>
    </div>
  );
};

export default App;
