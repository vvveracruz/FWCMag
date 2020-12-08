import React, { Component } from 'react';
import HomePage from '../components/HomePage/HomePage';

class IndexPage extends Component {
  render() {
    return (
      <HomePage
        title = "Filmmakers Without Cameras"
        faviconFilepath = "../public/favicon.ico" />
    )
  }
}

export default IndexPage;
