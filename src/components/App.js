import { useState } from 'react';
import { HomePage } from './HomePage/HomePage';

export const App = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <HomePage page={page} />
    </div>
  );
}; 