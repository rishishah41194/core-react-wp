import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
import single_blog from './pages/single-blog'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const routing = (
  <Router>
    <div>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/single-blog">Single Blog</Link>
        </li>
      </ul> */}
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
      <Route path="/single-blog" component={single_blog} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))