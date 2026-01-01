import { useState } from "react";
import "./App.css";
// state-update-explained
// normal vs functional update
function App() {
  const [normalCount, setNormalCount] = useState(0);
  const [functionalCount, setFunctionalCount] = useState(0);
  const handleNormalCount = () => {
    setNormalCount(normalCount + 1);
    setNormalCount(normalCount + 1);
    console.log(normalCount);
  };
  const handleFunctionalCount = () => {
    setFunctionalCount((prv) => prv + 1);
    setFunctionalCount((prv) => prv + 1);
    console.log(functionalCount);
  };
  return (
    <>
      <h1>useState Problem </h1>
      <div className="card">
        <button onClick={handleNormalCount}>
          Normal count is {normalCount}{" "}
        </button>
        <button onClick={handleFunctionalCount}>
          functional count is {functionalCount}{" "}
        </button>
      </div>
    </>
  );
}

export default App;
