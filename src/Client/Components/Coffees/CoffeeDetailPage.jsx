import React from 'react';
import {connect} from 'react-redux'
import {AddtoCard} from '../../actions/index';
import { Link } from "react-router";
const  kind = 'coffees';

const mapStateToProps= state => {
  return {
    detail:state.coffeedetails.Coffee,
    user:state.loginReducer.user.role
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    AddtoCard(id){
      dispatch(AddtoCard(id));
    }
  }
}

const CoffeeDetailPage = ({detail, user}) => {

   function render() { 
    console.log(user);
      return detail.map((item, i) =>
          <section key={i} className="row">
              <article className="col-md-15 text-center">
                <img src='./photos/cafe.png' width="320px" height="380px" alt="./photos/cafe.png"/>
              </article>
              <article className="bookinfo-details">
                <section className="booksheader">
                  <article>
                    <p className="booktitle">{item.name} </p>
                    <p className="booktitle">Autor: {item.kind}</p>
                  </article>
                  <article>
                    <button className="btn btn-primary"><i className="fa fa-heartbeat"></i> Favoritos</button> 
                  </article>
                </section>
                  <section className="col-md-8"> 
                    <p>Genero: {item.kind}</p>
                    <p className="detail-price">{item.price}€</p>
                  </section>
                  <section className="buttons-details">
                    <Link to= {'/reservebook/' + item.id } className="btn btn-primary"><i className="fa fa-bookmark"></i> Reserva-lo</Link>
                    <Link to= {user === 'user'?'/card':'/login'} onClick={()=>{AddtoCard(kind,item)}} className="btn btn-primary"><i className="fa fa-cart-plus"></i> Añadir al carrito</Link>
                  </section>
                </article>
              </section>
      )
    }
          return (
            <div>
              <div className="container-fluid">
                <div className="list">{detail == undefined ?'No se han podido entontrar ningun cafe!!!': render()}</div>
              </div>
            </div>
          );
    
}

export default connect (mapStateToProps) (CoffeeDetailPage);
