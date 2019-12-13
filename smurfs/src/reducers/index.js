import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from '../actions/'
import { ADD_SMURFS, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAILURE } from '../actions/'
import { DELETE_SMURFS, DELETE_SMURFS_SUCCESS, DELETE_SMURFS_FAILURE } from '../actions/'
import { EDIT_SMURFS, EDIT_SMURFS_SUCCESS, EDIT_SMURFS_FAILURE } from '../actions/'


const initialState =  {
   smurfs: [],
   fetchSmurfs: false,
   DELETESmurf: false,
   editSmurf: false,
   deleteSmurf: false,
   error: null,
 }


export const SmurfsReducer = (state=initialState,action) =>{


  switch(action.type){

    case FETCH_SMURFS:
    return {
        ...state,fetchSmurfs:true,
    }
    case FETCH_SMURFS_SUCCESS:
    return {
        ...state,smurfs:action.payload,fetchSmurfs:false
    }
    case FETCH_SMURFS_FAILURE:
    return {
        ...state,fetchSmurfs:false
    }

    case ADD_SMURFS:
    return {
        ...state,addSmurf:true,
    }
    case ADD_SMURFS_SUCCESS:
    return {
        ...state,smurfs:action.payload,addSmurf:false
    }
    case ADD_SMURFS_FAILURE:
    return {
        ...state,addSmurf:false
    }

    case DELETE_SMURFS:
    return {
        ...state,deleteSmurf:true,
    }
    case DELETE_SMURFS_SUCCESS:
    return {
        ...state,smurfs:action.payload,deleteSmurf:false
    }
    case DELETE_SMURFS_FAILURE:
    return {
        ...state,deleteSmurf:false
    }


    case EDIT_SMURFS:
    return {
        ...state,editSmurf:true,
    }
    case EDIT_SMURFS_SUCCESS:
    return {
        ...state,smurfs:action.payload,editSmurf:false
    }
    case EDIT_SMURFS_FAILURE:
    return {
        ...state,editSmurf:false
    }



    default:
    return state
    


}

}