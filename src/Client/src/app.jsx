import reactDOM from 'react-dom';
import React from 'react';
//const store = configureStore();
//const syncedHistory = syncHistoryWithStore(browserHistory, store);
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Categoris from './Components/Categoris';
import  CoffeeListPage from './Components/CoffeeListPage';
//import { createStore } from 'redux'
//import todoApp from './reducers'
//import MainLayout from  './Components/Prueba';
//let store = createStore(todoApp)


 $(document).ready(function(){
    //reactDOM.render(<Menu/>, document.getElementById('menu'));
    reactDOM.unmountComponentAtNode(document.getElementById('body')); //umount react component
    reactDOM.render(<CoffeeListPage/>, document.getElementById('content'));
   /* reactDOM.render(<Header/>, document.getElementById('content'));
    reactDOM.render(<Categoris/>, document.getElementById('categoris'));*/
    console.log('Hola');
   
    //reactDOM.render(<MainLayout/>, document.getElementById('header'));
  /*
    reactDOM.render((  
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/:(filter)" component={Home} />
        <Route path="/:(filter)" component={Contact} />
      </Router>
  </Provider>

    ), document.getElementById('context'));*/
 });