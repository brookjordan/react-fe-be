import React, { Component } from 'react';
import { connect } from 'react-redux';
import canUseDOM from '../config/can-use-dom.js';
import { Link } from 'react-router-dom'
import randomString from '../methods/random-string.js';

class Spitter extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (canUseDOM) {
      clearInterval(this.interval);
      this.interval = setInterval(async () => {
        const FETCH_REQ   = new Request('/num');
        let raw = await fetch(FETCH_REQ);
        let num = await raw.json();

        this.props.dispatch({
          type : 'set : stuff - num',
          to   : num,
        });
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div>
        <h1>Hello Brook! { this.props.num }</h1>

        <Link to='/home'>Go home</Link>
        <br />
        <Link to='/spitter'>Go spitter</Link>
        <br />
        <Link to={ `/${ randomString() }` }>Get lost!</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    num : state.stuff.num,
  };
}
let spitterConnect   = connect(mapStateToProps);
let connectedSpitter = spitterConnect(Spitter);
export default connectedSpitter;
