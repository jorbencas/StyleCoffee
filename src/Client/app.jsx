import React from 'react';
import reactDOM  from 'react-dom';
import App from './Components/App';
//require('dotenv').config();

 $(document).ready(function(){
    reactDOM.render(<App/>, document.getElementById('body'));
 });