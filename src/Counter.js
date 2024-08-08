import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faRedo } from '@fortawesome/free-solid-svg-icons';
import { increment, decrement, reset, selectCount } from './counterSlice';

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={() => dispatch(decrement())}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => dispatch(reset())}>
          <FontAwesomeIcon icon={faRedo} />
        </button>
      </div>
    </div>
  );
}

export default Counter;
