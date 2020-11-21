import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux'
import {addSmurf} from '../actions/index'
import SmurfList from "./SmurfList";

const initialState = {
  name: "",
  age: 0,
  height: "",
  id: null,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurf: initialState,
    };
  }

  handleChange = (e) => {
    this.setState({
      smurf: { ...this.state.smurf, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({
      smurf: initialState,
    });
  };

  render() {
    return (
      <div className="App">
                <>
                  <h1>SMURFS! W/Redux</h1>
                  <div>Welcome to your state management version of Smurfs!</div>
                  <div>Start inside of your `src/index.js` file!</div>
                  <div>Have fun!</div>
                  
                  <form>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      value={this.state.smurf.name}
                      onChange={this.handleChange}
                    />
                    <input
                      type="number"
                      name="age"
                      placeholder="age"
                      value={this.state.smurf.age}
                      onChange={this.handleChange}
                    />
                    <input
                      type="text"
                      name="height"
                      placeholder="height"
                      value={this.state.smurf.height}
                      onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Add Smurf</button>
                  </form>

                  <SmurfList/>
                </>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs:state.smurfs,
    isLoading:state.isLoading,
    error: state.error
  }
}
export default connect(mapStateToProps,{addSmurf})(App);
