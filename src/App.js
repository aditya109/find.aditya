import './App.css';
import { profile } from './assets/manifest';
import images from './assets/images';
import Hero from './components/Hero/Hero';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.profile = profile;
    this.images = images;
  }
  render() {
    return (
      <div className="App"
      >
        <Hero
          fullName={this.profile.full_name}
          shortName={this.profile.short_name}
          navigation={this.profile.navigation}
          hero={this.profile.hero}
        />
      </div>
    )
  }
}

