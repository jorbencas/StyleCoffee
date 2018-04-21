import React from 'react';
import { Link } from "react-router";


class BooksListPage extends React.Component {
    constructor(props){
        super(props); 
        this.state = {                
            components: this.props.list.books
          };   
          this.editable = this.editable.bind(this);
          this.mangment = this.mangment.bind(this);        
    }


      componentWillReceiveProps(nextProps){
        console.log('Params:' + nextProps);
        this.setState({
          components:nextProps.list
          //componentsOriginal:nextProps.list,
        });
      }

      editable(id){
        if (localStorage.getItem('token')) {
          return(
            <section className="buttons">
              <Link className="button" to={'/BooksList/Book/'+id}>Editar</Link>
              <Link className="button" to={'/BooksList/Book/'+id}>Eliminar</Link>
            </section>
          );
        }else{
          return(
            <section className="buttons">
            <Link className="button" to={'/BooksList/Book/'+id}>Leer Más</Link>
          </section>
          );
        }
      }

      mangment(){
        if(localStorage.getItem('token')){
          return(
            <section>
              <Link className="button" to={'/BooksList/Book/'}>Crear un nuevo libro</Link>
              <Link className="button" to={'/BooksList/Book/'}>Eliminar todos</Link>
            </section>
          );
        }
      }
    render() {               
        const component = this.state.components.map((item) => (
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
                  {this.editable(item.id)}
                </article>
            </section>
          ));
          return (
            <div className="grid-main" id="listbooks">
              {this.mangment()}
              <div  id="list" >{ component != {} ? component:'No hay Libros!!' }</div>
            </div>
          );
    }
}

export default BooksListPage;