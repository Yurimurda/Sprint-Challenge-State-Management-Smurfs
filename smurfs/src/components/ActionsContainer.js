import React from 'react'; 
import { connect } from "react-redux";
import { addSmurf } from '../actions/index'
import './App.css';

class ActionsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name:'',
            Age:'',
            Height:''
        }

    }
    handleFieldChange=(event)=>{
        this.setState({[event.target.id]:event.target.value})
    }
    formSubmit=(event)=>{
        event.preventDefault();
        this.props.addSmurf({
            name:this.state.Name,
            age:this.state.Age,
            height:this.state.Height
        })
        this.setState({Name:'', Age:'', Height:'' })
    }
    render(){
        return(
            <div className="smurfProfile">
            <form className="smurfFeature" onSubmit={this.formSubmit}>
                <p>Name</p><input id='Name' onChange={this.handleFieldChange} placeholder='Name' value ={this.state.Name}></input>
                <p>Age</p><input id='Age' onChange={this.handleFieldChange} placeholder='Age' value ={this.state.Age}></input>
                <p>Height</p><input id='Height' onChange={this.handleFieldChange} placeholder='Height' value={this.state.Height}></input>
                <button>Submit Smurf</button>
            </form>
            </div>
        )
    }
}


  export default connect(null,{ addSmurf})(ActionsContainer);