import React from "react";
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import BooksListPage from './BooksListPage';
import CoffeeListPage from './CoffeeListPage';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BooksDetailPage from './BooksDetailPage';

const Menu = () => (
  <Router>
    <div>
      <header id="header" role="header" className="grid-header">
        <div className="grid-header-logo">
          <div id="rankinglist"></div>
          <Link title="App Ranking List" role="link" aria-valuetext="Ranking List" to="/">
            <h1> 
              <img role="img" src="./assets/photos/logo.png" width="50px"  alt="Logo del Ranking Students"/>
              <span className="header-title">StyleCoffee</span>
            </h1>
          </Link>  
        </div>
        <nav id="menu" className="header-menu" role="menu">
            <ul>
              <li className="listado-item"><Link to="/Contact">Contact</Link></li>
              <li className="listado-item"><Link to="/Coffee">Categoris</Link></li>
              <li className="listado-item"><Link to="/Books">Books</Link></li>
            </ul>
        </nav>
      </header>
      <div id="content">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Contact" component={Contact} />
        <Route path="/Coffee" component={CoffeeListPage} />
        <Route path="/Books" component={BooksListPage} />
        <Route path={'/Books/Book/'+1} component={BooksDetailPage}/>
        <Route path={"/Coffees/Coffee/"+1} component={CoffeeListPage} />
      </Switch>
      </div>
    </div>
  </Router>
);

export default Menu;