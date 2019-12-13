import React from 'react'
import { fetchSmurfs, deleteSmurf } from '../actions/index'
import { connect } from "react-redux";
import Smurf from '../components/Smurf'


class ListContainer extends React.Component {

    componentDidMount(){
        this.props.fetchSmurfs();
    }
    handleDeleteSmurf = (event,id) =>{
        event.preventDefault();
        this.props.deleteSmurf(id);
    }
    render(){
        console.log('this.props',this.props)
        if(this.props.fetchSmurfs){
            return <h1>Go get the smurfs!</h1>
        } else {
            return (
                <div>
                    {
                        this.props.smurfsList.map(el=>{
                           return <Smurf key={el.id} handleDeleteSmurf={this.handleDeleteSmurf} data={el}/>
                        })
                    }
                </div>
            )
        }

    }
}


const mapStateToProps = state => {
    console.log('state = ', state)
    return {
        fetchSmurfs:state.fetchSmurfs,
        smurfsList:state.smurfs
    };
  };

  export default connect(mapStateToProps,{ fetchSmurfs,deleteSmurf })(ListContainer);