import React from 'react';
import { CoffeeService } from '../services';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM  from 'react-dom';
import Menu from './Menu.jsx';
import { getCookie } from '../lib/utils';
import axios from 'axios';

class  CoffeeListPage extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {                
          components: [], 
          params : props.match.params.kind
        };     
        this.UserList = this.UserList.bind(this);
      } 
    
      componentDidMount() {
        //if (this.state.components === {} ) {
          this.UserList();
        //}
      }
    
      UserList(event) {
        const params = this.state.params;
        console.log(params);
        if (params && getCookie('kindsearch') == 'true'){
          aixos.get('http://localhost:3001/api/coffee/:' + params )
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

      componentWillUnmount(){
        console.log('Unmount');
        //ReactDOM.unmountComponentAtNode(document.getElementById('content'));
        //$('#listcoffee').remove();
      }

      render() {
        const component = this.state.components.map((item) => (
          <div>
            <p>{ item.name }</p>
            <p>{ item.kind }</p>
            <p>{ item.price }</p>
            <Link to={'/Coffees/Coffee/' + item.id}>details</Link>  
          </div>
        ));

        return (
          <div id="listcoffee">
            <div className="grid-main">
              <div>Home</div>
              <div>{ component }</div>
            </div>
          </div>
        );
      }
}

export default CoffeeListPage;



//             