import React from 'react';
import reactDOM  from 'react-dom';
import App from './Components/App';
import $ from 'jquery';
import '../../dist/css/bootstrap.min.css';
import '../../dist/css/toastr.min.css';
import '../../dist/css/font-awesome.min.css';

 $(document).ready(function(){
    reactDOM.render(<App/>, document.getElementById('body'));
 });