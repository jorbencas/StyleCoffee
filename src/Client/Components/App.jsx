import React from "react";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Route, Switch } from "react-router-dom";
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { getCookie } from "../lib/utils";
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
import Managebooks from './Books/EditBooks';
import managecoffees from './Coffees/EditCoffee';
import ReserveBook from './Reserves/ReservePage';
import ListReserve from './Reserves/ListResrve';
import EditModal from './common/EditModal';
import store from '../Store';
import NotFound from './errors/NotFound';

const isModal = getCookie('modal');
const token = localStorage.getItem('token');
const user = store.getState().loginReducer.user;

if (user.lenght > 0 && token) {
   store.dispatch({type:"AUTH_USER", user:user});
}else{
  localStorage.removeItem('token');
}

export class App extends React.Component{  
render() {
  console.log(getCookie('modal'));
  return (
    <Provider store={store}>
     <Router history={browserHistory}>
        <Route component={Main}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Contact" component={Contact} />
            <Route path="/CoffeeList" component={CoffeeListPage} />
            <Route path="/coffees/:param" component={CoffeeListPage} />
            <Route path="/BooksList" component={BooksListPage} />
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
            <Route path='/createbooks' component={Managebooks}/>
            <Route path='/createcoffees' component={managecoffees}/>
            <Route path='/editebook/:id' component={Managebooks}/>
            <Route path='/editecoffee/:id' component={managecoffees}/>
            <Route path='/error' component={NotFound}/>
          </Switch>
        </Route>
    </Router>
  </Provider>
  )};

};

export default App ;