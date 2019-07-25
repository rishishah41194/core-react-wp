import React from 'react'
import Header from './header.js';
import Footer from './footer.js';


class single_blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    return fetch( `https://public-api.wordpress.com/wp/v2/sites/gatsbyjsexamplewordpress.wordpress.com/posts/?slug=`+window.location.pathname )
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
    // console.log( window.location.pathname )
    return (
      
      <div id="main">
        <div className="inner">
          <Header />
          {this.state.data.map((item, index) => (  
            <div>
              <header className="main">
                {console.log( item )}
                <h1  dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              </header>
              <div className= "content" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
            </div>
          ))}
          <Footer />
        </div>
      </div>
    );
  }
}
export default single_blog