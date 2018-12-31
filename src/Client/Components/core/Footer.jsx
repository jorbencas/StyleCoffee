import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props); 
    }    

    render() {   
        return (
        <div>
            <footer>
                <div className="footer" id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                <h3> Lorem Ipsum </h3>
                                <ul>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                <h3> Lorem Ipsum </h3>
                                <ul>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                <h3> Lorem Ipsum </h3>
                                <ul>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2  col-md-2 col-sm-4 col-xs-6">
                                <h3> Lorem Ipsum </h3>
                                <ul>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                    <li> <a href="#"> Lorem Ipsum </a> </li>
                                </ul>
                            </div>
                            <div className="col-lg-3  col-md-3 col-sm-6 col-xs-12 ">
                                <h3> Lorem Ipsum </h3>
                                <ul>
                                    <li>
                                        <div className="input-append newsletter-box text-center">
                                            <input type="text" className="full text-center" placeholder="Email "/>
                                            <button className="btn  bg-gray" type="button"> Lorem ipsum <i className="fa fa-long-arrow-right"> </i> </button>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="social">
                                    <li> <a href="#"> <i className=" fa fa-facebook">   </i> </a> </li>
                                    <li> <a href="#"> <i className="fa fa-twitter">   </i> </a> </li>
                                    <li> <a href="#"> <i className="fa fa-google-plus">   </i> </a> </li>
                                    <li> <a href="#"> <i className="fa fa-pinterest">   </i> </a> </li>
                                    <li> <a href="#"> <i className="fa fa-youtube">   </i> </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="container">
                        <p className="pull-left"> Copyright © Footer 2014. All right reserved. </p>
                        <div className="pull-right">
                            <ul className="nav nav-pills payments">
                                <li><i className="fa fa-cc-visa"></i></li>
                                <li><i className="fa fa-cc-mastercard"></i></li>
                                <li><i className="fa fa-cc-amex"></i></li>
                                <li><i className="fa fa-cc-paypal"></i></li>
                            </ul> 
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        );
    }
}

export default Footer;