import React from "react";
import Home from './common/Home';
import Contact from './common/Contact';
import { Route, Switch } from "react-router-dom";
import BooksDetailPage from './Books/BooksDetailPage';
import CoffeeDetailsPage from './Coffees/CoffeeDetailPage';
import Login from './auth/Login';
import AbouteUs from './common/AbouteUs';
import singup from './auth/SingUp';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { loadOffer, loadList } from '../actions';
import Main from './core/Main';
import listcoffee from './containers/listcoffee';
import listbooks from './containers/listbooks';
import profile from './auth/profile';
const store = createStore(rootReducer, applyMiddleware(thunk)); 
store.dispatch(loadOffer());
store.dispatch(loadList());
/*
const token = localStorage.getItem('token');
// if we have a token, consiger the user to be signed in
if (token) {
    // we need to update application state
    store.dispatch({ type: AUTH_USER });
}
*/

class App extends React.Component{
  
  render() {
    
    return (
    <Provider store={store}>
     <Router history={browserHistory}>
    <div id="content">
    <Route component={Main}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/CoffeeList" component={listcoffee} />
        <Route path="/coffees/:param" component={listcoffee} />
        <Route exact path="/BooksList" component={listbooks} />
        <Route path="/book/:param" component={listbooks} />
        <Route path='/BooksList/Book/:id' component={BooksDetailPage}/>
        <Route path='/CoffeeList/Coffee/:id' component={CoffeeDetailsPage} />
        <Route path="/login" component={Login} />
        <Route path="/SingUp" component={singup} />
        <Route path='/abouteus' component={AbouteUs} />
        <Route path='/profile' component={profile}/>
      </Switch>
      </Route>
    </div>
  </Router>
  </Provider>
)};

};

export default App;