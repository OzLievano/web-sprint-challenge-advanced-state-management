import axios from 'axios'

export const IS_LOADING = "IS_LOADING"
export const DATA_FETCHED = "DATA_FETCHED"
export const FETCH_ERROR = "FETCH_ERROR"

export const loadSmurfData = () => (dispatch) => {
    console.log('ol: index.js actions: dispatch',dispatch)
    const apiURL = 'http://localhost:3333/smurfs'

    dispatch({
        type:IS_LOADING
    })

    axios.get(apiURL)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:DATA_FETCHED,payload:res.data})
    })
    .catch((err)=>{
        console.log(err)
        dispatch({
            type:FETCH_ERROR,
            payload:`error fetching data: ${err.message}`
        })
    })
}