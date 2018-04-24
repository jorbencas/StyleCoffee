import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {coffeesdetails} from '../../actions/index';

const CoffeeListPage = ({detail, coffeesdetails}) => {

     function render() {
        return detail.map((item, i) => (
          <div className="item">
            <h1>{ item.name }</h1>
            <img src='./assets/photos/cafe.png' width="130px" height="180px" alt="./assets/photos/cafe.png"/>
            <p>{ item.kind }</p>
            <p className="price">{ item.price } €</p>
            <Link className="btn-search" to={'/CoffeeList/Coffee/' + item.id} onClick={()=>{coffeesdetails(item.id)}}>details</Link>  
          </div>
        ));
      }
        return (
          <div id="listcoffee">
            <div className="grid-main">
              <div>{  render() }</div>
            </div>
          </div>
        );
}

const mapStateToProps= state => {
  console.log(state);
  return {
    detail:state.productsOffer.Coffee
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    coffeesdetails(id){
      dispatch(coffeesdetails(id));
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(CoffeeListPage);