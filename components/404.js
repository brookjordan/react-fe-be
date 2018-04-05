import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import randomString from '../methods/random-string.js';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Page not found.</h1>

        <Link to='/home'>Go home</Link>
        <br />
        <Link to='/spitter'>Go spitter</Link>
        <br />
        <Link to={ `/${ randomString() }` }>Get lost!</Link>
      </div>
    );
  }
}

export default Home;
