import React, { Component } from 'react';
import banner from '../images/pic10.jpg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

class Index extends Component {
  render() {
    return (

        <div className="main-container">
            <section id="banner">
              <div className="content">
                <header>
                  <h1>Hi, I’m Editorial<br />
                  by HTML5 UP</h1>
                  <p>A free and fully responsive site template</p>
                </header>
                <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                <ul className="actions">
                  <li><a href="#" className="button big">Learn More</a></li>
                </ul>
              </div>
              <span className="image object">
                <img src={banner} alt="" />
              </span>
            </section>
            <hr />
            
            <section>
              <header className="major">
                <h2>Blogs</h2>
              </header>
              <div className="posts">
                <article>
                  <a href="#" className="image"><img src={banner} alt="" /></a>
                  <h3>Interdum aenean</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul class="actions"><li><Link to="/single-blog">Read More</Link></li></ul>
                </article>

                <article>
                  <a href="#" className="image"><img src={banner} alt="" /></a>
                  <h3>Interdum aenean</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul class="actions"><li><Link to="/single-blog">Read More</Link></li></ul>
                </article>

                <article>
                  <a href="#" className="image"><img src={banner} alt="" /></a>
                  <h3>Interdum aenean</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul class="actions"><li><Link to="/single-blog">Read More</Link></li></ul>
                </article>

                
              </div>
            </section>
          </div>
    );
  }
}

export default Index;