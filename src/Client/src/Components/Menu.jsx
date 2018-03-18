import React from "react";
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import BooksListPage from './BooksListPage';
import CoffeeListPage from './CoffeeListPage';
import { BrowserRouter as Router, Route, Link, IndexRoute } from "react-router-dom";

const Menu = () => (
  <Router>
    <div>
      <header id="header" role="header" className="grid-header">
        <div className="grid-header-logo">
          <div id="rankinglist"></div>
          <Link title="App Ranking List" role="link" href="#rankinglist" aria-valuetext="Ranking List" to="/Home">
            <h1> 
              <img role="img" src="./assets/photos/logo.png" width="50px"  alt="Logo del Ranking Students"/>
              <span className="header-title">StyleCoffee</span>
            </h1>
          </Link>  
        </div>
        <nav id="menu" className="header-menu" role="menu">
            <ul>
              <li className="listado-item"><Link to="/Home">Home</Link></li>
              <li className="listado-item"><Link to="/Contact">Contact</Link></li>
              <li className="listado-item"><Link to="/Coffee">Categoris</Link></li>
              <li className="listado-item"><Link to="/Books">Books</Link></li>
            </ul>
        </nav>
      </header>
      <Route path="/Home" component={Home}/>
      <Route path="/Contact" component={Contact} />
      <Route path="/coffee" component={CoffeeListPage} />
      <Route path="/Books" component={BooksListPage} />
    </div>
  </Router>
);

export default Menu;