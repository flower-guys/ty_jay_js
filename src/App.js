import React, { Component } from 'react';
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyAl3H_ijO7wZVFV2juq1ofEWNB_euZeyQY",
  authDomain: "ty-jay-js.firebaseapp.com",
  databaseURL: "https://ty-jay-js.firebaseio.com",
  projectId: "ty-jay-js",
  storageBucket: "ty-jay-js.appspot.com",
  messagingSenderId: "425444501628"
};
firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            TY👏Jay👊JS🙌
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
