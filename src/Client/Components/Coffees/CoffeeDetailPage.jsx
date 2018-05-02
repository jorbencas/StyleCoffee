import React from 'react';
import {connect} from 'react-redux'
import {AddtoCard} from '../../actions/index';

const mapStateToProps= state => {
  return {
    detail:state.coffeedetails.Coffee
  };
}
/*
const mapDispatchToProps = dispatch =>{
  return{
    AddtoCard(id){
      dispatch(AddtoCard(id));
    }
  }
}*/

const CoffeeDetailPage = ({detail}) => {
 
   function render() { 
     console.log(detail);
      return detail.map(item =>{
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      })
    }
          return (
            <div>
              <div className="grid-main">
                <div>{detail == undefined ?'': render()}</div>
              </div>
            </div>
          );
    
}

export default connect (mapStateToProps) (CoffeeDetailPage);