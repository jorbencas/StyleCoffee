import React from "react";
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import BooksListPage from './BooksListPage';
import CoffeeListPage from './CoffeeListPage';
import { Route, Switch } from "react-router-dom";
import BooksDetailPage from './BooksDetailPage';
import CoffeeDetailsPage from './CoffeeDetailPage';
import Footer from './Footer';
import Login from './Login';
import AbouteUs from './AbouteUs';
import singup from './SingUp';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';
import { loadOffer, loadList } from '../actions';

const store = createStore(rootReducer, applyMiddleware(thunk)); 
store.dispatch(loadOffer());
store.dispatch(loadList());


class App extends React.Component{
  
  render() {
    
    return (
    <Provider store={store}>
     <Router history={browserHistory}>
    <div id="content">
     <Route component={Header}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/CoffeeList" component={CoffeeListPage} />
        <Route path="/coffees/:param" component={CoffeeListPage} />
        <Route exact path="/BooksList" component={BooksListPage} />
        <Route path="/book/:param" component={BooksListPage} />
        <Route path='/BooksList/Book/:id' component={BooksDetailPage}/>
        <Route path='/CoffeeList/Coffee/:id' component={CoffeeDetailsPage} />
        <Route path="/login" component={Login} />
        <Route path="/SingUp" component={singup} />
        <Route path='/abouteus' component={AbouteUs} />
      </Switch>
      </Route>
      <Footer/>
    </div>
  </Router>
  </Provider>
)};

};

export default App;