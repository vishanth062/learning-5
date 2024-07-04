import style from './Task_1.module.css'
import Task_2 from '../Task_2/Task_2.js';
import Table from '../Table/Table.js';


const Task_1=({onClick})=>{


    return(
<>
<button  className={style.button} onClick={()=>onClick(1)} >Task 1</button>



</>

    );
}

export default Task_1