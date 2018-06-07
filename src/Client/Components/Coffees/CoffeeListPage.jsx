import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {loadlistCoffees,coffeesdetails} from '../../actions/index';
import { bindActionCreators } from 'redux';
import { getCookie, setCookie } from '../../lib/utils.js';

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
    this.editable = this.editable.bind(this);
    this.mangment = this.mangment.bind(this);
  }

  componentWillMount(){
    window.location.pathname === "/CoffeeList" ?this.props.loadlistCoffees():[{}];
  }

  componentWillReceiveProps(nextProps){
    this.setState({detail:nextProps.detail});
  }

  mangment(){
   if( getCookie('role') === 'admin'){
     return(
       <section>
         <Link className="btn btn-primary" to='/createbooks'>Crear un nuevo libro</Link>
         <Link className="btn btn-danger" to='/BooksList' onClick={() => {this.props.deletebooks()}}>Eliminar todos</Link>
         <br/><br/>
       </section>
     );
   }
 }

  editable (item){
   if(this.props.user === 'admin'){
     return(
       <section>
         <Link className="btn btn-success" to={'/editebook/'+item.id}  onClick={() => { this.props.booksdetail(item.id)}} >Editar</Link>
         <Link className="btn btn-danger" to={'/BooksList'}  onClick={() => { this.props.deletebook(item.id)}} >Borrar</Link>
       </section>
     )
   }else{
     return(
       <section>
         <Link className="btn btn-primary" to={'/CoffeeList/Coffee/'+item.id} onClick={() => { this.props.coffeesdetails(item.id)}}><i className="fa fa-plus-circle"></i> Leer Más</Link>
       </section>
     ) 
   }
 }

      render() {
        const detail = this.state.detail.map((item, i) => (
          <section className="row">
          <article className="col-sm-2">
           <div className="state"><p>{item.state}</p></div>
            <img src='./photos/cafe.png' width="140px" height="215px" alt="./photos/cafe.png"/>
          </article>
          <article className="col-sm-5">
            <p>{ item.name }</p>
            <h2>{item.price}€</h2>
            {this.editable(item)}
          </article>
      </section> 
        ));
      
        return (
              <div className="container-fluid" id="listbooks">
              {this.mangment()}
              <div id="list" >{ this.state.detail.lenght <= 0?'No hay cafes':detail }</div>
            </div>
        )
      }
}

export default connect (mapStateToProps,mapDispatchToProps)(CoffeeListPage);