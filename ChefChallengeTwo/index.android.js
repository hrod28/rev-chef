import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './src/main';

class ChefChallengeTwo extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('ChefChallengeTwo', () => ChefChallengeTwo);
