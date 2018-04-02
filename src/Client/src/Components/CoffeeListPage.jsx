import React from 'react';
import { CoffeeService } from '../services/services';
import { Link } from "react-router";
import ReactDOM  from 'react-dom';
import App from './App.jsx';
import { getCookie } from '../lib/utils';
import axios from 'axios';

class  CoffeeListPage extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {                
          components: [], 
          params : props.match.params.param
        };     
        this.UserList = this.UserList.bind(this);
      } 
    
      componentDidMount() {
          this.UserList();
      }
    
      UserList(event) {
        const params = this.state.params;
        console.log(params);
        if (params){
          axios.get('http://localhost:3001/api/coffee/' + params )
          .then(
            response => this.setState({components: response.data.Coffee})
          );
        }else{
          axios.get('http://localhost:3001/api/coffee')
          .then(
            response => this.setState({components: response.data.Coffee})
            )
        }
      }

      render() {
        const component = this.state.components.map((item) => (
          <div className="item">
            <h1>{ item.name }</h1>
            <img src='./assets/photos/cafe.png' width="130px" height="180px" alt="./assets/photos/cafe.png"/>
            <p>{ item.kind }</p>
            <p className="price">{ item.price } €</p>
            <Link className="btn-search" to={'/CoffeeList/Coffee/' + item.id}>details</Link>  
          </div>
        ));

        return (
          <div id="listcoffee">
            <div className="grid-main">
              <div>{ component }</div>
            </div>
          </div>
        );
      }
}

export default CoffeeListPage;