import React from 'react';
import './completion.css';
import { IconCheck } from '../Svg';

function Completion({ handleCompletion }) {
  return (
    <div className='completion'>
      <div className='checked-icon'> <IconCheck /></div>
      <div className='thanking'>Thanks for your support!</div>
      <div className='thanking-phrase'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</div>
      <button onClick={handleCompletion}>Got it!</button>
    </div>
  )
}

export default Completion
