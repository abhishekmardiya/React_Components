//*************************************Redux********************************************

// actionTypes.js
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export { INCREMENT_COUNTER, DECREMENT_COUNTER };

//action.js
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./actionTypes";

function incrementCounter(payload) {
  return { type: INCREMENT_COUNTER, payload: payload };
}

function decrementCounter(payload) {
  return { type: DECREMENT_COUNTER, payload };
}

export { incrementCounter, decrementCounter };

//reducer.js
function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT_COUNTER":
      return { ...state, counter: state.counter + payload };

    case "DECREMENT_COUNTER":
      return { ...state, counter: state.counter - payload };

    default:
      return state;
  }
}

export default reducer;

//store.js
import { legacy_createStore } from "redux";
import reducer from "./reducer";

const initialState = {
  counter: 0,
};

const store = legacy_createStore(reducer, initialState);

export default store;

//*************************************Component********************************************

//Counter.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../Redux/action";

const Counter = () => {
  const count = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch(incrementCounter(1));
  };
  const handleDec = () => {
    dispatch(decrementCounter(1));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default Counter;

//index.js config
import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
