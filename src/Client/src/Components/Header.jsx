import React from 'react';
import Menu from './Menu';
//import reactDOM from 'react-dom';
import Home from './Home';
import Categoris from './Categoris';

import {Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class Header extends React.Component {
    constructor(props){
        super(props);
        //var menu = reactDOM.render(<Menu/>, document.getElementById('menu'));  
        //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 });        
       // T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
       /* this.state = {                
          motto:T.translate("motto")    
        }; */      
    }    
   /* componentDidMount() {
        this.subscription = events.subscribe('settings/change',(obj) => {  
            //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 })
            T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
            this.setState({
                motto:T.translate("motto")     
            });               
        });      
    }

    componentWillUnmount() {
        this.subscription.remove();
    }
*/

    render() {   
        return (
        <div className="grid-header-logo">
            <div id="rankinglist"></div>
            <a title="App Ranking List" role="link" href="#rankinglist" aria-valuetext="Ranking List">
              <h1> 
                <img role="img" src="http://www.intecoingenieria.es/fotos/biblioteca/alumnos.png" width="50px"  alt="Logo del Ranking Students"/>
                <span className="header-title">StyleCoffee</span>
              </h1>
            </a> 
          <nav id="menu" className="header-menu" role="menu">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
          </ul>
          </nav>
        </div>
        );
    }


    










}


















export default Header;