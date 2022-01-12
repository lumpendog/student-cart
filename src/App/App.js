import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Cart from './pages/cart';
import Edit from './pages/edit';

function App() {
  return (
    <Switch>
      <Route path={'/edit'} component={Edit} />
      <Route path={'/'} component={Cart} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
