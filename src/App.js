import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    };
    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus();
    };
  }
  componentWillMount() {
    // autofocus the input on mount
    this.focusTextInput();
  }

  render() {
    return (
      <div className="App">
        Learn React
        <input
          type="text"
          ref={this.setTextInputRef}
        />
      </div>
    )  
  }
}
