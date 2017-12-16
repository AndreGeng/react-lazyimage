import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LazyImage from 'react-lazyimage';
import 'react-lazyimage/build/lazyimage.css';

class App extends Component {
  render() {
    const dataList = Array.from(Array(20));
    const eleList = dataList.map((data) => {
      return <LazyImage className='lazyimage' height={300} targetSrc='http://css3.bradshawenterprises.com/images/Cirques.jpg' defaultSrc='http://via.placeholder.com/450x281' />
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {eleList}
      </div>
    );
  }
}

export default App;
