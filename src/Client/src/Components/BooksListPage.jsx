import React from 'react';
import BooksDetailPage from './BooksDetailPage';
import { Link } from "react-router";
import ReactDOM  from 'react-dom';
import axios from 'axios';
import App from './App.jsx';

class BooksListPage extends React.Component {
    constructor(props){
        super(props); 
        console.log(props);  
        this.state = {                
            components: [],
            params: this.props.match.params.param
          };      
          this.UserList = this.UserList.bind(this);   
    }    

    componentWillMount(){
      console.log(this.state.params);
      this.UserList();
    }

    componentDidMount() {
        this.UserList();
      }
    
      UserList(event) {
      const params = this.state.params;
      console.log(params);
        if (params) {
          axios.get('http://localhost:3001/api/books/'+ params)
          .then(response => this.setState({components: response.data.books}));
        }else{
          axios.get('http://localhost:3001/api/books')
          .then(response => this.setState({components: response.data.books}));
        }
      }

     /* componentWillUnmount(){
        console.log('Unmount');
      }*/

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
                  <section className="buttons">
                    <Link className="button" to={'/BooksList/Book/'+item.id}>Leer Más</Link>
                  </section>
                </article>
            </section>
          ));
          return (
            <div className="grid-main" id="listbooks">
              <div  id="list" >{ component }</div>
            </div>
          );
    }
}

export default BooksListPage;