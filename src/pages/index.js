import React, { Component } from 'react';
import banner from '../images/pic10.jpg';
import rishi_shah from '../images/rishi-shah.JPG';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

class Index extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    return fetch(`https://wptest.io/wp-json/wp/v2/pages`)
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
        <section id="banner">
          <div className="content">
          <header>
            <h1>Hi, I’m <br />
            Rishi Shah</h1>
            <p>A Web Developer</p>
          </header>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
          <ul class="actions"><li><Link to="/about" className="button primary">About Me</Link></li></ul>
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
                  {/* {console.log(item.excerpt.rendered)} */}
                <a href="#" className="image"><img src={banner} alt="" /></a>
                <h3>{item.title.rendered}</h3>
                <div className= "content" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                <ul class="actions"><li><Link to="/single-blog" className="button">Read More</Link></li></ul>
              </article>
            ))}
              </div>
        </section>
      </div>
    )
  }
}

export default Index;