export const IS_LOADING = "IS_LOADING"
export const DATA_FETCHED = "DATA_FETCHED"
export const FETCH_ERROR = "FETCH_ERROR"

export const loadSmurfData = () => (dispatch) => {
    console.log('ol: index.js actions: dispatch',dispatch)
    const apiURL = 'http://localhost:3333/smurfs'
    
    dispatch({
        type:IS_LOADING
    })
}