import React, { Component } from 'react';
import rishi_shah from '../images/rishi-shah.JPG';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';
import Header from './header.js';
import Footer from './footer.js';


class Index extends Component {
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
      <div className="main-container">
        <Header />
        <section id="banner">
          <div className="content">
          <header>
            <h1>Hi, I’m <br />
            Rishi Shah</h1>
            <p>A Web Developer</p>
          </header>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
          <ul className="actions"><li><Link to="/about" className="button primary">About Me</Link></li></ul>
          </div>
          <span className="image object">
          <img src={rishi_shah} alt="" />
          </span>
        </section>
        <hr />
        <section>
          <header className="major">
          <h2>Blogs</h2>
          </header>
          <div className="posts">
            {this.state.data.map((item, index) => (  
              <article>
                <a href="#" className="image"><img src={item.jetpack_featured_media_url} alt="" /></a>
                <h3  dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                <div className= "content" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                <ul className="actions"><li><Link to={item.slug} className="button">Read More</Link></li></ul>
              </article>
            ))}
              </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Index;