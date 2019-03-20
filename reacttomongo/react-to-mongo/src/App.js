import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    pname: '',
    pprice: '',
    pcat: ''
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.state.pname);
    console.log(this.state.pprice);
    console.log(this.state.pcat);

    axios.post('http://localhost:5000/addproduct', {
      name: this.state.pname,
      price: this.state.pprice,
      category: this.state.pcat
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error);
    });
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
          <h1>Add Product</h1>
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
