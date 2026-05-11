import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Mounting
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Component Updated");
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Lifecycle Methods Practice</h1>

      {show && (
        <div>
          <h2>Counter: {count}</h2>

          <button onClick={() => setCount(count + 1)}>
            Increase Count
          </button>
        </div>
      )}

      <br /><br />

      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
    </div>
  );
}

export default App;