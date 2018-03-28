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
            <div className="item">
                <img src='./assets/photos/libro.png' width="130px" height="180px" alt="./assets/photos/libro.png"/>
                <p>{ item.title }</p>
                <Link className="btn-search" to={'/BooksList/Book/'+item.id}>details</Link>
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