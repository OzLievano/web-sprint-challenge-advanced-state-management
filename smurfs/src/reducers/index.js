export {DATA_LOADING,DATA_FETCHED,FETCH_ERROR} from '../actions/index'
const initialState = {
    smurfs: [],
    isLoading:false,
    error:''
}


export const smurfReducer = (state=initialState,action) => {
    console.log('ol: index.js/reducers: reducer: state, action',state,action)
    switch(action.type){
        case 
    }
}