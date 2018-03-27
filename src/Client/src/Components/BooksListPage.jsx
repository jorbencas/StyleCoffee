import React from 'react';
import BooksDetailPage from './BooksDetailPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM  from 'react-dom';
import axios from 'axios';
import App from './App.jsx';

class BooksListPage extends React.Component {
    constructor(props){
        super(props); 
        console.log(props);  
        this.state = {                
            components: [],
            params: this.props.match.params
          };      
          this.UserList = this.UserList.bind(this);   
    }    

    componentWillMount(){
      console.log(this.state.params);
      this.UserList();
    }

    /*componentDidMount() {
        this.UserList();
      }*/
    
      UserList(event) {
      /*const genere = this.state.params;
        if (genere) {
          axios.get('http://localhost:3001/api/books/'+ genere)
          .then(response => this.setState({components: response.data.books}));
        }else{*/
          axios.get('http://localhost:3001/api/books')
          .then(response => this.setState({components: response.data.books}));
        /*}*/
      }

     /* componentWillUnmount(){
        console.log('Unmount');
      }*/

    render() {               
        const component = this.state.components.map((item) => (
            <div>
                <img src={item.image} width="130px" height="180px" alt=""/>
                <p>{ item.title }</p>
                <Link to={'/Books/Book/'+item.id}>details</Link>
                <Link to={'/Coffees/Coffee/' + item.id}>details</Link> 
            </div>
          ));
          return (
            <div id="listbooks">
              <div className="grid-main">
                <div>Home</div>
                <div>{ component }</div>
              </div>
            </div>
          );
    }
}

export default BooksListPage;