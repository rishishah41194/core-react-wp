import React, { Component } from 'react';
import './App.css';
import Contact from './contact'
import Index from './pages/index'
import Users from './users'
import single_blog from './pages/single-blog'
import about from './pages/about'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    return fetch(`https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/posts/`)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        data: responseJson,
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    return (
      <div id="main">
        <div className="inner">
        <Router>
          <div>
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={about} />
                {this.state.data.map((item, index) => (  
                  <Route path={"/"+item.slug} component={single_blog} />
                ))}
            </Switch>
          </div>
        </Router>
          {/* <Header />
          <Index />
          <Footer /> */}
        </div>
      </div>
    );
  }
}

export default App;
