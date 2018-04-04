import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';

class BooksDetailPage extends React.Component {
    constructor(props){
        super(props);   
        this.state = {                
            components: [],
            params: this.props.params.id
          };
          console.log('Hola' +  this.state.params);
    }    
    componentWillMount() {
      this.getdata();
    }

    getdata(event){
      const id = this.state.params;
      if (id){
        axios.post('http://localhost:3001/api/books/' + id)
        .then(
          response => this.setState({components: response.data.books})
        );
      }
    }
    render() {   
      console.log(this.state.components);            
          const component = this.state.components.map((item) =>
            <section className="itembook">
              <article className="bookfoto">
                <p>{item.state}</p>
                <img src={item.image} width="320px" height="380px" alt="./assets/photos/libro.png"/>
              </article>
              <article className="bookinfo-details">
                <section className="booksheader">
                  <article>
                    <p className="booktitle">{item.title} ({item.format}) </p>
                    <p className="booktitle">Autor: {item.author}</p>
                  </article>
                  <article>
                    <a className="button">Favoritos</a>
                  </article>
                </section>
                  <section className="Bookdetails"> 
                    <article className="d2">
                      <p>Año de publicación:{item.yearpublication}</p>
                      <p>Idioma: {item.languaje}</p>
                      <p>Edición: {item.edition}</p>
                      <p>Genero: {item.genere}</p>
                      <p>ISBN: {item.isbn}</p>
                    </article>
                    <article className="d1">
                      <p>{item.description}</p>
                    </article> 
                  </section>
                  <section className="buttons-details">
                    <p className="detail-price">{item.price}€</p>
                    <a className="button">Reserva-lo</a>
                    <a className="button">Comprar</a>
                  </section>
                </article>
              </section>
          )
          return (
            <div>
              <div className="grid-main">
                <div>{component}</div>
              </div>
            </div>
          );
    }
}

export default BooksDetailPage;