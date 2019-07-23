import React from 'react'
class Users extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    return fetch(`http://wptest.io/wp-json/wp/v2/pages`)
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
      <div>
          {this.state.data.map((item, index) => (
            <div>
              <div class="row">
                <div class="leftcolumn">
                  <div class="card">
                    <div className= "title">
                      <h1>{item.title.rendered}</h1>
                    </div>
                    <div className= "content" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                  </div>
                </div>
              </div>
            </div>
            ))}
      </div>
    )
  }

}
export default Users