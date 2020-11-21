import {IS_LOADING,DATA_FETCHED,FETCH_ERROR, POST_DATA} from '../actions/index'
const initialState = {
    smurfs: [],
    isLoading:false,
    error:''
}


export const smurfReducer = (state=initialState,action) => {
    console.log('ol: index.js/reducers: reducer: state, action',state,action)
    switch(action.type){
        case IS_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case DATA_FETCHED:
            return {
                ...state,
                smurfs: action.payload,
                isLoading:false
            }
        case FETCH_ERROR:
            return{
                ...state,
                isLoading:false,
                error: action.payload.message
            }
        case POST_DATA:
            return{
                ...state,
                smurfs:action.payload
            }
        default:
            return state
    }
}