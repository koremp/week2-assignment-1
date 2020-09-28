import React, { useState } from 'react';
import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickNumber(number) {
    setState({
      count: count + number,
    });
  }

  return (
    <div>
      <p>Counter</p>
      <Page count={count} handleClickNumber={handleClickNumber} />
    </div>
  );
}

export default App;
