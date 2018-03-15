import ReactDOM from 'react-dom';
import React, { PropTypes } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';

class MainLayout extends React.Component {
   constructor(){
    super();
    //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 });        
   // T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
   /* this.state = {                
      motto:T.translate("motto")    
    }; */      
}    

  render() {
    return (
      <Router>
      <div className="app">
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
      </div>

<Route path="/Home" component={Home} />
<Route path="/Contact" component={Contact} />
</Router>

      )
  }










}