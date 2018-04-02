import React from "react";
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import BooksListPage from './BooksListPage';
import CoffeeListPage from './CoffeeListPage';
import { BrowserRouter as Router, Route, Link, Switch, browserHistory,IndexRoute } from "react-router-dom";
import BooksDetailPage from './BooksDetailPage';
import CoffeeDetailsPage from './CoffeeDetailPage';
import Footer from './Footer';
import Login from './Login';
import AbouteUs from './AbouteUs';
import singup from './SingUp';

import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk)); 
import { loadOffer, loadList } from '../../actions';
store.dispatch(loadOffer());
store.dispatch(loadList());


class App extends React.Component{
  
  render() {
    
    return (
  <Provider store={store}>
  <Router history={browserHistory}>
     <Route path="/" component={Header}>
        <IndexRoute component={Home}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Contact" component={Contact} />
        <Route path="/Coffee" component={CoffeeListPage} />
        <Route path="/Coffee/:subject" component={CoffeeListPage} />
        <Route path="/Books" component={BooksListPage} />
        <Route path="/Books/:kind" component={BooksListPage} />
        <Route path='/Books/Book/:id' component={BooksDetailPage}/>
        <Route path='/Coffees/Coffee/:id' component={CoffeeDetailsPage} />
        <Route path="/login" component={Login} />
        <Route path="/SingUp" component={singup} />
        <Route path='/abouteus' component={AbouteUs} />
      </Route>
  </Router>
  </Provider>
    );
  }
  };

export default App;