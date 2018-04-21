import React from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../../actions/index';
import CoffeeListPage from '../Coffees/CoffeeListPage';

const mapStateToProps=(state)=>{
    console.log(state);
    return state.productsOffer;
  }

class listcoffee extends React.Component{
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
        <CoffeeListPage list={this.state.store.list} ></CoffeeListPage>
    )
}
};

export default connect (mapStateToProps, actionCreators)(listcoffee);