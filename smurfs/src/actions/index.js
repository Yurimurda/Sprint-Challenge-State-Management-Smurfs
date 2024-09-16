import axios from 'axios';


export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURFS = 'ADD_SMURFS';
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS';
export const ADD_SMURFS_FAILURE = 'ADD_SMURFS_FAILURE';

export const DELETE_SMURFS = 'DELETE_SMURFS';
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS';
export const DELETE_SMURFS_FAILURE = 'DELETE_SMURFS_FAILURE';


export const EDIT_SMURFS = 'EDIT_SMURFS';
export const EDIT_SMURFS_SUCCESS = 'EDIT_SMURFS_SUCCESS';
export const EDIT_SMURFS_FAILURE = 'EDIT_SMURFS_FAILURE';




export const editSmurf = (id,data) => dispatch => {

  dispatch({ type: EDIT_SMURFS });

  axios
    .put(`http://localhost:3333/smurfs/${id}`,data)
    .then(response => {
      dispatch({ type: EDIT_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: EDIT_SMURFS_FAILURE, payload: error });
  });
};


export const deleteSmurf = (id) => dispatch => {

  dispatch({ type: DELETE_SMURFS });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => {
      dispatch({ type: DELETE_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: DELETE_SMURFS_FAILURE, payload: error });
  });
};

export const fetchSmurfs = () => dispatch => {

  dispatch({ type: FETCH_SMURFS });

  axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: FETCH_SMURFS_FAILURE, payload: error });
  });
};


export const addSmurf = (newSmurf) => dispatch => {

  dispatch({ type: ADD_SMURFS });

  axios
    .post('http://localhost:3333/smurfs',newSmurf)
    .then(response => {
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: ADD_SMURFS_FAILURE, payload: error });
  });
};