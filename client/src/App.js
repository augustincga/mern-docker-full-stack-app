import React, { Component } from 'react';
import logo from './logo.svg';

import NotesList from './components/NotesList/NotesList'
import './App.css';

class App extends Component {
  render() {
    return (
      <NotesList/>
    );
  }
}

export default App;
