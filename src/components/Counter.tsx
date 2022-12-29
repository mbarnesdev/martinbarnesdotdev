import { useState } from 'preact/hooks';
import type { FunctionComponent } from 'preact';

interface ICounterProps {
  initialCount?: number;
}

const Counter: FunctionComponent<ICounterProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount((prevCount: number) => prevCount + 1);
  const handleDecrement = () => setCount((prevCount: number) => prevCount - 1);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
