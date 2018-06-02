import React from 'react';
import reactDOM  from 'react-dom';
import App from './Components/App';
import $ from 'jquery';
/*
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/toastr/build/toastr.min.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
*/
 $(document).ready(function(){
    reactDOM.render(<App/>, document.getElementById('body'));
 });