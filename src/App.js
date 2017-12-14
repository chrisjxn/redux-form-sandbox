import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Private from './components/private/Private';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Login} exact />
          <Route path='/private' component={Private} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
