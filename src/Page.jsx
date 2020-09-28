import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, handleClickNumber }) {
  return (
    <div>
      <Counter
        count={count}
        onClick={() => handleClickNumber(1)}
      />
      <Buttons onClick={handleClickNumber} />
    </div>
  );
}

export default Page;
