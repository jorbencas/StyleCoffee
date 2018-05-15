import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {loadListBooks,booksdetail, deletebooks,deletebook} from '../../actions/index';
import { bindActionCreators } from 'redux';

const mapStateToProps = state => {
  return { 
    books: state.productsList.books
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({loadListBooks,booksdetail,deletebooks, deletebook}, dispatch);
}

class BooksListPage extends React.Component {
  constructor({props,loadListBooks,books,booksdetail,deletebooks}) {
    super(props);
    this.state = {
      listbooks:[],
      kind:'books'
    };
    this.mangment = this.mangment.bind(this);
    this.editable = this.editable.bind(this);
  } 

  componentWillMount(){
    window.location.pathname === "/BooksList" ?this.props.loadListBooks():[{}];
  }

  componentWillReceiveProps(nextProps){
    this.setState({listbooks:nextProps.books});
  }

       mangment(){
        if(localStorage.getItem('token')){
          return(
            <section>
              <Link className="button" to='/createbooks'>Crear un nuevo libro</Link>
              <Link className="button" to='/BooksList' onClick={() => {this.props.deletebooks()}}>Eliminar todos</Link>
              <br/><br/>
            </section>
          );
        }
      }

       editable (item){
        if(localStorage.getItem('token')){
          return(
            <section>
              <Link className="button" to={'/editebook/'+item.id}  onClick={() => { this.props.booksdetail(item.id)}} >Editar</Link>
              <Link className="button" to={'/BooksList'}  onClick={() => { this.props.deletebook(item.id)}} >Borrar</Link>
            </section>
          )
        }else{
          return(
            <section>
              <Link className="button" to={'/BooksList/Book/'+item.id}  onClick={() => { this.props.booksdetail(this.state.kind,item.id)}} >Leer Más</Link>
            </section>
          ) 
        }
      }

     render() {
      const Books = this.state.listbooks.map( item => (
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
              {this.editable(item)}
            </article>
        </section> 
        ));

        return(
          <div className="grid-main" id="listbooks">
              {this.mangment()}
              <div  id="list" >{ this.props.books != [{}] ? Books:'No hay Libros!!' }</div>
            </div>
        ) 
      } 
}

export default connect (mapStateToProps,mapDispatchToProps)(BooksListPage);