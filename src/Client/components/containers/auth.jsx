import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/index';
import BooksListPage from '../BooksListPage';

const mapStateToProps=(state)=>{
    console.log(state);
    return state.productsList;
  }

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {                
            store: this.props,
        };  
      } 

      componentWillReceiveProps(nextProps){
          this.setState({
            store:nextProps
          })
      }

render(){
    return(
        <BooksListPage uesr={this.state.store.user} ></BooksListPage>
    )
}
};

export default connect (mapStateToProps, actionCreators)(Login);