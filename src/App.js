import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';


function App() {

  const [colorBox, setColorBox] = useState([]);

  return (
   <div>
    <Form colorBox = {colorBox} setColorBox = {setColorBox}/>
    <Display colorBox = {colorBox} setColorBox = {setColorBox}/>
   </div>
  );
}

export default App;