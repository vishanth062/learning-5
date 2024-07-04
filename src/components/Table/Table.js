import  style from './Table.module.css'
import randomData from '../data';
import { useState } from 'react';

const Table=()=>{
const [getData,setData]=useState(randomData)
    function vote(){
        const reff=[...randomData]

reff.sort((a,b)=>b.upvote-a.upvote)
setData(reff)
    }

    function recent(){
const reff=[...randomData]

reff.sort((a,b)=>new Date(b.date)-new Date(a.date))
setData(reff)
    }
    return (
        <>
    <div className={style.container}>
        <h2>
            Sort By
        </h2>
        <button onClick={vote}>Most Voted</button>
        <button onClick={recent}>Most Recent</button> 

    </div>
    <table>
        <tr>
            <th>title</th>
            <th>upvote</th>
            <th>date</th>
        </tr>
        <tbody>
        {
            getData.map((items,key)=>{
             return   <tr key={key}>
                    <td>{items.title}</td>
                    <td>{items.upvote}</td>
                    <td>{items.date}</td>
                </tr>
            }
            )
        }
        </tbody>
    </table>
    </>
    );
}


export default Table



// echo "# learning-5" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/vishanth062/learning-5.git
// git push -u origin main