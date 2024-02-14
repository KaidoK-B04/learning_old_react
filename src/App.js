import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(20);
  const [value, setValue] = useState("input value px");
  const [paddingSize, setPaddingSize] = useState("20px");

  function increment() {
    setLikes(likes + 1);
    setPaddingSize(`${parseInt(paddingSize) + 1}px`);
  }
  function decrement() {
    setLikes(likes - 1);
    setPaddingSize(`${parseInt(paddingSize) - 1}px`);
  }

  const bgColor = "green";

  return (
    <div
      className="App"
      style={{ backgroundColor: bgColor, padding: paddingSize, color: "white" }}
    >
      <h2>
        React function for incrementing and decrementing the px size of padding
        and text input mission.
      </h2>
      <p>
        When writing input text, it will not directly been displayed in the text
        input.
        <br />
        onChange calls an event where the letter you pressed is been stored in
        value for hook in useState.
        <br />
        Only then React triggers to compaire the values in virtual elements and
        User Interface. When it finds differences, it updates the text input
        area.
      </p>
      <h3>{likes}</h3>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
