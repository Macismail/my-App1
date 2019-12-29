import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render(){
    return (
      <div className="root-container">
        <Header />
        <MainContent />
      </div>
    )
  }
}

export default App;
