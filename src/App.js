import React, { useState } from 'react';
import './App.css'
import Text from './components/text/text';
import Button from './components/button/button';
import ButtonLabel from './components/buttonLabel/buttonLabel';

function App() {
  
  const [classe, setClass] = useState('')

  return (
    <>
      <Text class={classe}/>
      <Button event={()=>setClass('txt')} />
      <ButtonLabel label='olá mundo'/>
    </>
  )

}

export default App;
