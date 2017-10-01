import React, { Component } from 'react';


import NavBar from '../NavBar/NavBar';
import Cats from '../Cats/Cats';
import Footer from '../Footer/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <Cats/>
        <Footer/>
      </div>
    )
  }
}

export default App;
