import React from 'react';
import reactDOM  from 'react-dom';
import App from './Components/App';
import $ from 'jquery';
import '../../dist/css/bootstrap.min.css';
import '../../dist/css/toastr.min.css';
import '../../dist/css/font-awesome.min.css';
import '../../dist/css/react-datepicker.min.css';
import '../../dist/lib/bootstrap.min.js';
import '../../dist/lib/jquery.min.js';
import '../../dist/lib/toastr.min.js';

 $(document).ready(function(){
    reactDOM.render(<App/>, document.getElementById('body'));
 });