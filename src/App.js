import React, { Component } from 'react';
import './App.css';
import Header from './pages/header.js';
import Footer from './pages/footer.js';
import Index from './pages/index.js';

class App extends Component {
  render() {
    return (
      <div id="main">
        <div className="inner">
          <Header />
          <Index />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
