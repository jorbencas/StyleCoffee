import React from "react";

import { Route, Switch } from "react-router-dom";
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Home from './common/Home';
import Contact from './common/Contact';
import BooksListPage from './Books/BooksListPage';
import BooksDetailPage from './Books/BooksDetailPage';
import CoffeeDetailsPage from './Coffees/CoffeeDetailPage';
import Login from './auth/Login';
import AbouteUs from './common/AbouteUs';
import singup from './auth/SingUp';
import Main from './core/Main';
import CoffeeListPage from './Coffees/CoffeeListPage';
import Profile from './auth/profile';
import ShoppingCard from './Card/ShoppingCard';
import BuyForm from './Card/BuyformPage';
import managebooks from './Books/EditBooks';
import managecoffees from './Coffees/EditCoffee';
import ReserveBook from './common/ReservePage';

import { loadlistCoffees, loadListBooks,profile } from '../actions';
import store from '../Store';

const token = window.localStorage.getItem('token');
if (token) {
   store.dispatch({type:"AUTH_USER", user:store.getState().loginReducer.user});
}

store.dispatch(loadlistCoffees());

export class App extends React.Component{
  
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
            <Route exact path="/CoffeeList" component={CoffeeListPage} />
            <Route path="/coffees/:param" component={CoffeeListPage} />
            <Route exact path="/BooksList" component={BooksListPage} />
            <Route path="/books/:param" component={BooksListPage} />
            <Route path='/BooksList/Book/:id' component={BooksDetailPage}/>
            <Route path='/CoffeeList/Coffee/:id' component={CoffeeDetailsPage} />
            <Route path="/login" component={Login} />
            <Route path="/SingUp" component={singup} />
            <Route path='/abouteus' component={AbouteUs} />
            <Route path='/profile' component={Profile}/>
            <Route path='/card' component={ShoppingCard}/>
            <Route path='/buy' component={BuyForm}/>
            <Route path='/reservebook' component={ReserveBook}/>
            <Route path='/createbooks' component={managebooks}/>
            <Route path='/editebook/:id' component={managebooks}/>
            <Route path='/createcoffees' component={managecoffees}/>
            <Route path='/editecoffee/:id' component={managecoffees}/>
          </Switch>
        </Route>
      </div>
    </Router>
  </Provider>
)};

};

export default App ;