import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import {booksdetail} from '../../actions/index';

class  CoffeeListPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {                
          components:this.props.Coffee
        };      
      } 
    
      componentWillReceiveProps(nextProps){
        this.setState({
          store:nextProps
        })
      }


      render() {
        const component = this.state.components.map((item, i) => (
          <div className="item">
            <h1>{ item.name }</h1>
            <img src='./assets/photos/cafe.png' width="130px" height="180px" alt="./assets/photos/cafe.png"/>
            <p>{ item.kind }</p>
            <p className="price">{ item.price } €</p>
            <Link className="btn-search" to={'/CoffeeList/Coffee/' + item.id} >details</Link>  
          </div>
        ));

        return (
          <div id="listcoffee">
            <div className="grid-main">
              <div>{ component }</div>
            </div>
          </div>
        );
      }
}

const mapStateToProps=(state)=>{
  console.log(state);
  return state.productsOffer.Coffee;
}


/*
const mapDispatchToProps = dispatch =>{
  
}*/

export default connect (mapStateToProps)(CoffeeListPage);