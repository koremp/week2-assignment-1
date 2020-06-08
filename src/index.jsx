import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Title from './Title';
import ClickMeButton from './ClickMeButton';
import CountButtons from './CountButtons';


function App() {
  const [showNumber, setShowNumber] = useState(0);

  const handleClickMe = (upNumber) => {
    setShowNumber(showNumber + upNumber);
  };

  return (
    <div>
      <Title />
      <ClickMeButton
        showNumber={showNumber}
        handleClickMe={handleClickMe}
      />
      <CountButtons
        handleClickMe={handleClickMe}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
