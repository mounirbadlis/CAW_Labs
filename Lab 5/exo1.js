// 1.
import React, { useState } from 'react';

const ClickMeComponent = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{clicked ? 'Clicked' : ''}</p>
    </div>
  );
};

// 2.

// 3.
const App = () => {
  const handleClick = (buttonNumber) => {
    console.log(`Button #${buttonNumber} was clicked`);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Button1</button>
      <button onClick={() => handleClick(2)}>Button2</button>
      <button onClick={() => handleClick(3)}>Button3</button>
      <p>Button #i was clicked</p>
    </div>
  );
};

// 4.
const CounterApp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Inc</button>
      <button onClick={handleDecrement}>Dec</button>
    </div>
  );
};