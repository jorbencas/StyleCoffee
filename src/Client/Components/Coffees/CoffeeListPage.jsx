import React from 'react';
import { Link } from "react-router";

class  CoffeeListPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {                
          components:this.props.list.Coffee
        };         
      } 
    
      componentWillReceiveProps(nextProps){
        console.log('Params:' + nextProps);
        this.setState({
          components:nextProps.list
          //componentsOriginal:nextProps.list,
        })
      }


      render() {
        const component = this.state.components.map((item, i) => (
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