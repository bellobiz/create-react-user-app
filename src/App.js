import React, { Component } from 'react';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import './App.css';

class App extends Component {
  state = {
    userName: [
      { username: "bello-noah"}
    ]
  };

  eventHandler = () => {
    this.setState({
      userName: [
        { username: "bello-osagie"}
      ]
    })
  };

  changedEvent = (event) => {
    this.setState({
      userName: [
        { username: event.target.value, age: 26 }
      ]
    })
  };
  
  render () {

    const buttonStyle = {
      backgroundColor: '#07b',
      color: 'white',
      border: '5px solid #07b',
      margin: '20px',
      boxShadow: '3px 3px 5px 2px #eee',
      padding: '10px 17px',
      borderRadius: '5px'
    };

    return (
      <div className="App">
        <UserOutput
        username={this.state.userName[0].username}
        age={this.state.userName[0].age}/> 
        <UserInput
        changed={this.changedEvent}/> 
        <button style={buttonStyle} onClick={this.eventHandler}>Click Me!</button>
      </div>
    );
  }
}

export default App;