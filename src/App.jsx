import React, { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter >= 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0)
    }
  }
  return (
    <div>
      <button data-testid="increment-button" onClick={increment}>Tambah</button>
      <button data-testid="decrement-button" onClick={decrement}>Tambah</button>
      <p data-testid="text">{counter}</p>
    </div>
  )
}
