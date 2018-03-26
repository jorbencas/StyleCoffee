import React from "react";
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import BooksListPage from './BooksListPage';
import CoffeeListPage from './CoffeeListPage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BooksDetailPage from './BooksDetailPage';
import CoffeeDetailsPage from './CoffeeDetailPage';
import Footer from './Footer';
import Login from './Login';
import AbouteUs from './AbouteUs';
import singup from './SingUp';
const App = () => (
  <Router>
    <div id="content">
     <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
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
      </Switch>
      <Footer/>
    </div>
  </Router>
);

export default App;