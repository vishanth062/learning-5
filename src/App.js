import logo from './logo.svg';
import './App.css';
import Task_1 from './components/Task_1/Task_1';
import Task_2 from './components/Task_2/Task_2';
import Table from './components/Table/Table';
import Slider from './components/Slider/Slider';

import { useState } from 'react';


function App() {
const [getvalue,setvalue]=useState(0)
function handle(value){
  setvalue(value)
}
  
  return (
    <>
   <Task_1 onClick={(value)=>handle(value)}/>
   <Task_2 onClick={(value)=>handle(value)}/>
   <div className='border border-1px border-solid border-white'></div>
{(getvalue==1)&&<Table/>}
{(getvalue==2)&&<Slider/>}
    </> 

  );
}

export default App;
