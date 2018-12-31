import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {loadListBooks,booksdetail, deletebooks,deletebook} from '../../actions/index';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  console.log(state);
  return { 
    books: state.productsList.books,
    user: state.SingUpReducer.user.role
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({loadListBooks,booksdetail,deletebooks, deletebook}, dispatch);
}

class BooksListPage extends React.Component {
  constructor({props,loadListBooks,books,user,booksdetail,deletebooks}) {
    super(props);
    this.state = {
      listbooks:[]
    };
    this.mangment = this.mangment.bind(this);
    this.editable = this.editable.bind(this);
  } 

  componentWillMount(){
    window.location.pathname === "/BooksList" ?this.props.loadListBooks():[{}];
  }

  componentWillReceiveProps(nextProps){
    this.setState({listbooks:nextProps.books});
    console.log(this.state);
  }

       mangment(){
        if( this.props.user === 'admin'){
          return(
            <section className="text-center">
              <Link className="btn btn-primary" to='/createbooks'><i className="fa fa-plus"></i></Link>&nbsp;&nbsp;&nbsp;
              <Link className="btn btn-danger" to='/BooksList' onClick={() => {this.props.deletebooks()}}><i className="fa fa-trash-o"></i></Link>
              <br/><br/>
            </section>
          );
        }
      }

       editable (item){
        if( this.props.user === 'admin'){
          return(
            <section>
              <Link className="btn btn-success" to={'/editebook/'+item.id}  onClick={() => { this.props.booksdetail(item.id)}} ><i className="fa fa-pencil"></i></Link>&nbsp;&nbsp;&nbsp;
              <Link className="btn btn-danger" to={'/BooksList'}  onClick={() => { this.props.deletebook(item.id)}} ><i className="fa fa-trash-o"></i></Link>
            </section>
          )
        }else if(this.props.user === 'user'){
          return(
            <section>
              <Link className="btn btn-primary" to={'/BooksList/Book/'+item.id}  onClick={() => { this.props.booksdetail(item.id)}}><i className="fa fa-plus-circle"></i> Leer Más</Link>
            </section>
          ) 
        }
      }

     render() {
      const Books = this.state.listbooks.map( (item, i) => (
        <section key={i} className="col-md-4">
            <article className="col-md-12 text-center">
             <div className="state"><p>{item.state}</p></div>
              <img src={item.image} width="140px" height="215px" alt="./assets/photos/libro.png"/>
            </article>
            <article className="col-md-12 text-center">
              <p>{ item.title }</p>
              <p>{item.author}</p>
              <p>{item.edition}</p>
              <h2>{item.price}€</h2>
              {this.props.user == undefined ?<section><Link className="btn btn-primary" to={'/BooksList/Book/'+item.id}  onClick={() => { this.props.booksdetail(item.id)}}><i className="fa fa-plus-circle"></i> Leer Más</Link></section>:this.editable(item)}
            </article>
        </section> 
        ));

        return(
          <div className="container-fluid" id="listbooks">
            { this.props.user == undefined ?'':this.mangment()}
              <div className="row" >{ this.state.listbooks.length > 0 ? Books:'No hay Libros!!' }</div>
          </div>
        ) 
      } 
}

export default connect (mapStateToProps,mapDispatchToProps)(BooksListPage);