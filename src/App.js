import logo from './logo.svg';
import './App.css';
import store from './store'
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';

import Header from './Compenent/scripts/Header';
import Home from './Compenent/scripts/ecommerce/Home'
import Product from './Compenent/scripts/ecommerce/Products';
import Register from './Compenent/scripts/ecommerce/Register';
import Login from './Compenent/scripts/ecommerce/Login'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/product/:name" component={Product}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Router>

    </Provider>
    
  );
}

export default App;
