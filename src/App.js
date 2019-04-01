import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    mockUpSize: 2480,
    displaySize: 1920,
    mockUpNumber: 0,
    displayNumber: 0,
  };

  setDisplayNumber = () => {
    const { displaySize, mockUpSize, mockUpNumber } = this.state;
    const displayNumber = displaySize / mockUpSize * mockUpNumber;
    this.setState({displayNumber});
  };

  onMockUpNumberChange = (e) => {
    const mockUpNumber = e.target.value;
    
    if(!mockUpNumber || mockUpNumber.match(/^\d{1,}$/)) {
      this.setState({ mockUpNumber: Number(mockUpNumber) }, () => {
        this.setDisplayNumber();
      }); 
    };
  };

  onMockUpSizeChange = (e) => {
    const mockUpSize = e.target.value;
    
    if(!mockUpSize || mockUpSize.match(/^\d{1,}$/)) {
      this.setState({ mockUpSize: Number(mockUpSize) }, () => {
        this.setDisplayNumber();
      }); 
    };
  };

  onDisplaySizeChange = (e) => {
    const displaySize = e.target.value;
    
    if(!displaySize || displaySize.match(/^\d{1,}$/)) {
      this.setState({ displaySize: Number(displaySize) }, () => {
        this.setDisplayNumber();
      }); 
    };
  }

  render() {
    const { 
      mockUpNumber,
      mockUpSize,
      displayNumber,
      displaySize
    } = this.state;

    return (
      <div className="app">
        <div className="app__mock-up-block">
          Number
          <input 
            type="text" 
            value={mockUpNumber} 
            onChange={this.onMockUpNumberChange}
          />
          from the
          <input 
            type="text" 
            value={mockUpSize}
            onChange={this.onMockUpSizeChange}
          />
          px's world
        </div>
        <div className="app__word">means</div>
        <div className="app__display-block">
          <div className="app__display-number">{displayNumber}</div>
          on the 
          <input 
            type="text" 
            value={displaySize}
            onChange={this.onDisplaySizeChange}
          />
          px's planet
        </div>
      </div>
    );
  }
}

export default App;
