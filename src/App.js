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
  deleteHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({
      userInput: updatedText
    })
  }
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch}
      key={index} 
      clicked={() => this.deleteHandler(index)}/>
    })
  
    return (
      <div className="App">
        <input type="text" onChange={this.onChangeHandler} value={this.state.userInput}/>
        <Validation inputLength={this.state.userInput.length}/>
        <p>{this.state.userInput}</p>
        {charList}
      </div>
    );
  }
}

export default App;
