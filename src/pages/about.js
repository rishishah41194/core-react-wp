import React from 'react'
import Header from './header.js';
import Footer from './footer.js';


class about extends React.Component {
  render() {
    return (
      <div id="main">
        <div className="inner">
          <Header />
          <section>
            <header className="main">
              <h1>About</h1>
            </header>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}
export default about