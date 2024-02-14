import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import ProtectedRoute from './ProtectedRoute';
import Cart from './Cart';
import { CartProvider } from 'react-use-cart';



function App() {

  return (
 
     <CartProvider>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={() => <HomePage  />} />
        <ProtectedRoute exact path="/cart" component={() => <Cart  />} />
      </Switch>
    </Router>
    </CartProvider>
  );
}

export default App;