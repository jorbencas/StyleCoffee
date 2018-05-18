import React from 'react';
import { Link } from "react-router";
import { logOut } from '../../services/services';
import * as actionCreators from '../../actions/index';
import {connect} from 'react-redux'
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
    constructor(props){
        super(props);  
    }    

    render() {   
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }

}

const mapStateToProps=(state)=>{
  return state;
}

export default connect (mapStateToProps, actionCreators)(Main);