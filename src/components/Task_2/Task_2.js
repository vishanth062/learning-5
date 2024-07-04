import './Task_2.css'

import Slider from '../Slider/Slider';

const Task_2=({...props})=>{


    return (
        <>
        <button className='m-7' onClick={()=>props.onClick(2)}>Task 2</button>
        </>
    );
}

export default Task_2