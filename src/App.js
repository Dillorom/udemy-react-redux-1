import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: "",
  }
  onChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value
    })

  }
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index}/>
    })
  
    return (
      <div className="App">
        <input type="text" onChange={this.onChangeHandler} value={this.state.userInput}/>
        <Validation inputLength={this.state.userInput.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
