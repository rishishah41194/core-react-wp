import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

class Header extends Component {
  render() {
    return (
      <header id="header">
      <Link to="/" className="logo"><strong>Rishi</strong> Shah</Link>
      <ul className="icons">
        <li><a href="#" className="fa fa-twitter fa-2x"></a></li>
        <li><a href="#" className="fa fa-facebook fa-2x"></a></li>
        <li><a href="#" className="fa fa-instagram fa-2x"></a></li>
      </ul>
    </header>
    );
  }
}

export default Header;
