import React from 'react';
import axios from 'axios';

export default class Feed extends React.Component {
  state = {};

  componentDidMount() {
      axios.get('/api/ideas')
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>Welcome to Ideally!</div>
    );
  }
}