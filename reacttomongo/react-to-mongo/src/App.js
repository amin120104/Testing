import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    pname: '',
    pprice: '',
    pcat: ''
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.state.pname);
    console.log(this.state.pprice);
    console.log(this.state.pcat);
  }

  changeValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state.pname);
    console.log(this.state.pprice);
    console.log(this.state.pcat);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.submit}>
            <input 
              type="text" 
              name="pname" 
              id="pname" 
              value={this.state.pname} 
              onChange={this.changeValue} 
            />
            <input type="number" name="pprice" id="pprice"
              value={this.state.pprice} 
              onChange={this.changeValue} 
           />
            <input type="text" name="pcat" id="pprice" 
              value={this.state.pcat} 
              onChange={this.changeValue} 
            />
            <input type="submit" value="submit" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
