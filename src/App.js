import React, { Component } from 'react'
import logo from './logo.svg'
import {connect} from 'react-redux'
import './App.css'
import List from './components/List/List'
import AddToList from './components/AddToList/AddToList'
import GetLuke from './components/GetLuke/GetLuke';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">

          <List title="Chores" chores={this.props.chores}/>
          <AddToList />
                                {/*use to be this.state.chores but
                                redux gives back the changes on props*/}
          {/*<List title="To-Do's:" chores={this.props.todo}/>*/}
        </p>
        <hr/>
        <hr/>
        <GetLuke/>
      </div>
    );
  }
}
// The "state" being passed is done by Redux, it's not defined in this file.
function mapStateToProps(state) {
  return {
    chores: state.chores,
    todo: state.todo
    //this is where you're "subscribing" to the stores state,
    //make sure not to subscribe to just "state"
    //**NOTE: what is happening is when the state changes it will return the changes
    // on "props"
  }
}
// The connect function is used on EACH component that you want to subscribe to the
//state of the store
export default connect(mapStateToProps)(App)
//technic in CS that is curring, which invokes a function that returns
//a function and then you invoke another function

