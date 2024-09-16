import React, { useEffect }from 'react'
import { fetchSmurfs } from '../actions/index'
import { connect } from "react-redux";
import Smurf from '../components/Smurf'


const ListContainer = ({fetchSmurfs, smurfs, error, isFetching}) => {
  useEffect(() => {
    fetchSmurfs();
  }, [fetchSmurfs]);
  if(isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }
  return (
    <div>
      {error && <p>{error}</p>}
      {smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};
export default connect(mapStateToProps, {fetchSmurfs})(ListContainer);