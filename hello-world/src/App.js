import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// }

class Hello extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <span>Hello</span>
    )
  }
}

class World extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (  
      <span>World</span>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hello />
        <World />
      </div>
    )
  }
}

export default App;
