import { useEffect, useState } from "react";
import "./App.css";
// state-update-explained
// normal vs functional update
function App() {
  const [count, setCount] = useState(0);
  const [fuCoount, setFuCount] = useState(0);
  const [useEffCount, setUseEffCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count); //
  };

  const functionalCount = () => {
    setFuCount((prv) => prv + 1);
    setFuCount((prv) => prv + 1);
    console.log(fuCoount);
  };

  useEffect(() => {
    setCount(useEffCount + 1);
    setCount(useEffCount + 1);
  }, [useEffCount]);
  return (
    <>
      <h1>useState Problem </h1>
      <div className="card">
        <button onClick={handleCount}>Normal count is {count} </button>
        <button onClick={functionalCount}>
          functional count is {fuCoount}
        </button>
        <button>useEffect count is {useEffCount}</button>
      </div>
    </>
  );
}

export default App;
