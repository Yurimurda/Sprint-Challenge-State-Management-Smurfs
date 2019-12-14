import React from 'react';
import './App.css';

const Smurf = ({smurf}) => {
  return (
    <div className ="smurfProfile">
      <p className="smurfFeature"> Name: {smurf.name}</p>
      <p className="smurfFeature"> Age: {smurf.age}</p>
      <p className="smurfFeature"> Height: {smurf.height}</p>
    </div>
  )
};
export default Smurf;