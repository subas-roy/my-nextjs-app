'use client'; // Converted the entire server component to client component & allows you to use react hooks and event handlers

import { useState } from 'react';

const Counter = () => {
  console.log('hello from counter client');
  const [count, setCount] = useState(0);
  return (
    <div className="justify-center">
      <h1 className="text-lg">Simple Counter</h1>
      <div>
        <button
          className="px-4 py-2 bg-red-500"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <span className="px-4 text-2xl">{count}</span>
        <button
          className="px-4 py-2 bg-green-500"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
