import React from 'react';
import './App.css';



const Smurf = (props) =>{
    return(

        <div className='smurfWrapper'>
            <div className='smurf'><div className='smurfHeader'>Id:</div><div className='smurfText'>{props.data.id}</div></div>
            <div className='smurf'><div className='smurfHeader'>Name:</div><div className='smurfText'>{props.data.name}</div></div>
            <div className='smurf'><div className='smurfHeader'>Age:</div><div className='smurfText'>{props.data.age}</div></div>
            <div className='smurf'><div className='smurfHeader'>Height:</div><div className='smurfText'>{props.data.height}</div></div>
            <br/>
            <br/>
            <button onClick={(event)=>{props.handleDeleteSmurf(event,props.data.id)}}>Delete</button>
            <p>{props.data.id}</p>
        </div>
    )
}
export default Smurf