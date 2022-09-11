//*************************************Redux********************************************

// actionTypes.js
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";

//action.js
import { INCREMENT_COUNTER } from "./actionTypes";

export const incrementCounter = (payload) => {
  return { type: INCREMENT_COUNTER, payload: payload };
};

//reducer.js
export function reducer(store, action) {
  const { type, payload } = action;

  switch (type) {
    case "INCREMENT_COUNTER":
      return { ...store, counter: store.counter + payload };

    default:
      return store;
  }
}

//store.js
import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  counter: 0,
};

export const store = legacy_createStore(reducer, initialState);

//*************************************Component********************************************

//Counter.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../Redux/action";

const Counter = () => {
  const count = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  const handleInc = () => {
    //1 is payload (it means increment counter value by 1)
    dispatch(incrementCounter(1));
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleInc}>Inc</button>
    </div>
  );
};

export default Counter;

//index.js config
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
