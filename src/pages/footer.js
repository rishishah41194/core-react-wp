import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
        <div className="main-footer">
            <section>
            <header className="major">
              <h2>Get in touch</h2>

              <ul className="contact">
                <li className="fa-envelope"><a href="#">information@untitled.tld</a></li>
                <li className="fa-phone">(000) 000-0000</li>
                <li className="fa-home">1234 Somewhere Road #8254<br />
                Nashville, TN 00000-0000</li>
              </ul>

            </header>

            <footer id="footer">
              <p className="copyright">© Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
            </footer>
            </section>
        </div>
    );
  }
}

export default Footer;
