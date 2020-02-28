import React, { Component } from 'react';
import ShopHeader from '../shop-header';
import ShopFooter from '../shop-footer';
import Home from '../pages/home';
import Shop from '../pages/shop';
import Register from '../auth/register';
import { AdminHome, AdminCategory } from '../admin';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <ShopHeader />
        <Switch>
          <Route path='/register' component={Register} />
          <Route path='/home' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route path='/admin' component={AdminHome}>
              <Route path='/admin' component={AdminHome} />
              <Route path='/admin/category' component={AdminCategory} />
          </Route>
          <Redirect to='/home' />
        </Switch>
        <ShopFooter />
      </Router>
    );
  }
}


export default App;