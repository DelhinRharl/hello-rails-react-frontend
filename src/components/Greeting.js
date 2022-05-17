import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/greeting';

const Greeting = () => {
  const { message } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  return (
    <>
      <p>{message}</p>
      <button type="button" onClick={() => dispatch(fetchMessage())}>Get New Message</button>
    </>
  );
};

export default Greeting;
