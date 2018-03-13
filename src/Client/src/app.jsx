import reactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import React from 'react';
//import { Route, Switch } from 'react-router-dom';
//import { ConnectedRouter } from 'react-router-redux';
import App from './Components/Contact';
import Menu from './Components/Menu';
import Home from './Components/Home';
import Categoris from './Components/Categoris';

 $(document).ready(function(){
  reactDOM.render(<Menu/>, document.getElementById('menu'));
    reactDOM.unmountComponentAtNode(document.getElementById('content')); //umount react component
    reactDOM.render(<Home/>, document.getElementById('content'));
    reactDOM.render(<Categoris/>, document.getElementById('categoris'));
    console.log('Hola');
    
/*    
    reactDOM.render((
      <Provider>
        <ConnectedRouter>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    
    ), document.getElementById('content'));*/
 });