import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Cerebro } from "./Cerebro";

export default function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    let nuevaSuma = count + 1;

    setCount(nuevaSuma);
  };

  const onDecrease = () => {
    let nuevaSuma = count - 1;

    setCount(nuevaSuma);
  };

  let name = "marianne"

  return (
    <>
      <Cerebro name={name}/>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={onClick}>suma</button>
        <button onClick={onDecrease}>resta</button>
      </div>
    </>
  );
}


