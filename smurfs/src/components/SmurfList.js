import React from 'react'
import {loadSmurfData} from '../actions/index'
import {connect} from 'react-redux'

const SmurfList = (props) => {
    console.log(props)
    const handleClick = (e) => {
        e.preventDefault()
        props.loadSmurfData()
    }
    return (
        <div>
            <button onClick={handleClick}>Load Smurfs</button>
            {props.smurfs.map((smurf,index)=>{
                return (
                    <div key={index}>
                        <h1>{smurf.name}</h1>
                        <h2>{smurf.age}</h2>
                        <h3>{smurf.height}</h3>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state=> {
    return {
        smurfs:state.smurfs,
        error:state.error,
        isLoading:state.isLoading
    }
}
export default connect(mapStateToProps,{loadSmurfData})(SmurfList)
