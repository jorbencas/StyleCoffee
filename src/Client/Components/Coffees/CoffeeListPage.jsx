import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {loadlistCoffees,coffeesdetails} from '../../actions/index';
import { bindActionCreators } from 'redux';

const mapStateToProps= state => {
  return {
    detail:state.productsOffer.Coffee
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({loadlistCoffees, coffeesdetails}, dispatch);
}

class CoffeeListPage extends React.Component {
  constructor({props, coffeesdetails, loadlistCoffees}){
    super(props)
    this.state = {
      detail:[]
    }
  }

  componentWillMount(){
    window.location.pathname === "/CoffeeList" ?this.props.loadlistCoffees():[{}];
  }

  componentWillReceiveProps(nextProps){
    this.setState({detail:nextProps.detail});
  }
      render() {
        const detail = this.state.detail.map((item, i) => (
          <section className="itembook">
            <article className="bookfoto">
              <div className="state"><p>{item.state}</p></div>
              <img src={item.image} width="140px" height="215px" alt="./assets/photos/libro.png"/>
            </article>
            <article className="bookinfo">
              <p>{ item.title }</p>
              <p>{item.author}</p>
              <p>{item.edition}</p>
              <h2>{item.price}€</h2>
              
            </article>
          </section> 
        ));
      
        return (
          <div id="listcoffee">
            <div className="grid-main">
              <div>{ this.state.detail.lenght <= 0?'No hay cafes':detail }</div>
            </div>
          </div>
        )
      }
}

export default connect (mapStateToProps,mapDispatchToProps)(CoffeeListPage);