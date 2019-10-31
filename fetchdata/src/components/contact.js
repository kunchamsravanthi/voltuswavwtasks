import React, { Component } from 'react';
// import ReactDOM from 'react-dom';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(posts => (this.setState({posts}))
      )} 
  render() {
    return (<div>
      Hello World
      <ul>
        {this.state.posts.map(post => <li>
          <h2>{post.firstname}</h2>
          <p>{post.name}</p>
        </li>)}
      </ul>
    </div>);
  }
}

// ReactDOM.render(
//   <Contact />,
//   mountNode
// );
export default Contact
