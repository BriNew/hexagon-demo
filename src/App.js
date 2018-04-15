import React from 'react';
import {Header} from './components/header';
import {Nav} from './components/nav';
import {Hexagons} from './components/hexagons';


export class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Nav />
        <Hexagons />
      </div>
      );
  }
}


