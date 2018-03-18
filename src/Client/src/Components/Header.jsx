import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);   
    }    

    render() {   
        return (
        <div>
        <header id="header" role="header" className="grid-header">
          <div className="grid-header-logo">
            <div id="rankinglist"></div>
            <a title="App Ranking List" role="link" href="#rankinglist" aria-valuetext="Ranking List">
              <h1> 
                <img role="img" src="./assets/photos/logo.png" width="50px"  alt="Logo del Ranking Students"/>
                <span className="header-title">StyleCoffee</span>
              </h1>
            </a> 
          </div>
          <nav id="menu" className="header-menu" role="menu"></nav>
        </header>
        </div>
        );
    }


    










}


















export default Header;