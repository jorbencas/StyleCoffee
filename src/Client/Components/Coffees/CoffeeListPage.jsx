import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {loadlistCoffees,coffeesdetails, deletecoffees, deletecoffee} from '../../actions/index';
import { bindActionCreators } from 'redux';

const mapStateToProps= state => {
  return {
    detail:state.productsOffer.Coffee,
    user:state.loginReducer.user.role
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({loadlistCoffees, coffeesdetails, deletecoffees, deletecoffee}, dispatch);
}

class CoffeeListPage extends React.Component {
  constructor({props, coffeesdetails, loadlistCoffees, deletecoffees}){
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
   if( this.props.user === 'admin'){
     return(
       <section className="text-center">
         <Link className="btn btn-primary" to='/createcoffees'><i class="fa fa-plus"></i></Link>&nbsp;&nbsp;&nbsp;
         <Link className="btn btn-danger" to='/BooksList' onClick={() => {this.props.deletecoffees()}}><i class="fa fa-trash-o"></i></Link>
         <br/><br/>
       </section>
     );
   }
 }

  editable (item){
   if(this.props.user === 'admin'){
     return(
       <section>
         <Link className="btn btn-success" to={'/editecoffee/'+item.id}  onClick={() => { this.props.coffeesdetails(item.id)}} ><i className="fa fa-pencil"></i></Link>&nbsp;&nbsp;&nbsp;
         <Link className="btn btn-danger" to={'/CoffeeList'}  onClick={() => { this.props.deletecoffee(item.id)}} ><i class="fa fa-trash-o"></i></Link>
       </section>
     )
   }else if(this.props.user === 'user'){
     return(
       <section>
         <Link className="btn btn-primary" to={'/CoffeeList/Coffee/'+item.id} onClick={() => { this.props.coffeesdetails(item.id)}}><i className="fa fa-plus-circle"></i> Leer Más</Link>
       </section>
     ) 
   }
 }

      render() {
        const detail = this.state.detail.map((item, i) => (
          <section key={i} className="row">
          <article className="col-sm-2">
           <div className="state"><p>{item.state}</p></div>
            <img src='./photos/cafe.png' width="140px" height="215px" alt="./photos/cafe.png"/>
          </article>
          <article className="col-sm-5">
            <p>{ item.name }</p>
            <h2>{item.price}€</h2>
            {this.props.user == undefined ? <section><Link className="btn btn-primary" to={'/CoffeeList/Coffee/'+item.id} onClick={() => { this.props.coffeesdetails(item.id)}}><i className="fa fa-plus-circle"></i> Leer Más</Link></section>:this.editable(item)}
          </article>
      </section> 
        ));
      
        return (
              <div className="container-fluid" id="listbooks">
              {this.props.user == undefined ?'':this.mangment()}
              <div id="list" >{ this.state.detail.lenght <= 0?'No hay cafes':detail }</div>
            </div>
        )
      }
}

export default connect (mapStateToProps,mapDispatchToProps)(CoffeeListPage);