import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      result: 0,
      operator: ""

    }
  }
  updateNum1 = (event) => {
    this.setState({
      num1: Number(event.target.value)
    })
  }
  updateNum2 = (event) => {
    this.setState({
      num2: Number(event.target.value)
    })
  }

  updateOp = (event) => {
    this.setState({
      operator: event.target.value
    })
  }


  clickCalculate = () => {

    let result = 0
    switch (this.state.operator) {
      case '+':
        result = this.state.num1 + this.state.num2
        break;
      case '-':
        result = this.state.num1 - this.state.num2
        break;
      case '*':
        result = this.state.num1 * this.state.num2
        break;
      case '/':
        result = this.state.num1 / this.state.num2
        break;
      default:
        alert('try again')
    }

    this.setState({
      result

    })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Calculator</h1>
        </header>
        <form >
          <p>First Number:</p> <input type="number" onKeyUp={this.updateNum1} /><br />
          <p>Operation: </p><select onChange={this.updateOp}>
            <option value=" " >  </option>
            <option value="+" > + </option>
            <option value="-" > - </option>
            <option value="*"> * </option>
            <option value="/ "> /  </option>
          </select><br />
          <p>Second Number:</p> <input type="number"onKeyUp={this.updateNum2} /><br />
        </form >
        <p> This is the result = {this.state.result} </p>
        <button  className="btn" onClick={this.clickCalculate}>Calculate</button>

      </div>
    );
  }
}

export default App;
