import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement,incrementByAmount ,incrementAsync} from "../state/counter/counterSlice";
import "./counter.css"

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="counter-container">
    <div className="counter-title">Counter App / Redux</div>
    <h2 className="counter-value">{count}</h2>
    <div className="counter-buttons">
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment By Amount of 5
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(5))}>
        Increment Async By Amount of 5
      </button>
    </div>
  </div>
  );
};

export default Counter;
