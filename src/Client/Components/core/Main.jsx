import React from 'react';
import { Link } from "react-router";
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
                <div id="modal"></div>
                {this.props.children}
                <Footer/>
            </div>
        );
    }

}

const mapStateToProps=(state)=>{
  return state;
}

export default connect (mapStateToProps)(Main);