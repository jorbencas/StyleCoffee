import React from "react";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Route, Switch } from "react-router-dom";
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
//Components
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
import CreditCard from './Card/CreaditCard';
import managebooks from './Books/EditBooks';
import managecoffees from './Coffees/EditCoffee';
import ReserveBook from './Reserves/ReservePage';
import ListReserve from './Reserves/ListResrve';

import store from '../Store';
const token = localStorage.getItem('token');
const user = store.getState().loginReducer.user;
if (user.lenght > 0 && token) {
   store.dispatch({type:"AUTH_USER", user:user});
}else{
  localStorage.removeItem('token');
}

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
            <Route path='/buy' component={CreditCard}/>
            <Route path='/reservebook/:id' component={ReserveBook}/>
            <Route path='/listreserve' component={ListReserve}/>
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