//CounterContext.jsx
import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const handleCount = (inc) => {
    setCount(count + inc);
  };
  return (
    <CounterContext.Provider value={{ count, handleCount }}>
      {children}
    </CounterContext.Provider>
  );
}

//component
import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Counter() {
  const { count, handleCount } = useContext(CounterContext);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => handleCount(1)}>Add</button>
    </div>
  );
}

export default Counter;

//index.js configuration
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterContextProvider } from "./context/CounterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>
);
