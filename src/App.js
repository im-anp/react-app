/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}*/
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './styles/style.css';
import Leftmenu from './component/Leftmenu.js';
import Header from './component/Header.js';
import { Sparklines ,SparklinesLine } from 'react-sparklines';
import CountUp from 'react-countup';
import Balence from './component/Balence.js';
import Graph from './component/Graph.js';
import Footer from './component/Footer.js';
import Card from './component/card.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
  }
  render() {
      const title = 'hi';
    return (
        <div>
       <Leftmenu />
       <Header />
       <Balence />
        <Card />
       <Graph />
       <Footer />
       </div>

    );
  }
}
  

//ReactDOM.render(<App />, document.getElementById('app'));


export default App;
