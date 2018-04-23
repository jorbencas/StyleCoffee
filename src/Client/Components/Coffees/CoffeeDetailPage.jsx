import React from 'react';
import {connect} from 'react-redux'
import {AddtoCard} from '../../actions/index';


const CoffeeDetailPage = ({detail}) => {
 
   function render() { 
     console.log(detail);
      return detail.map((item) =>
        <div>
          <p>{item.name}</p>
        </div>
      )
    }
          return (
            <div>
              <div className="grid-main">
                <div>{detail == undefined ?'': render()}</div>
              </div>
            </div>
          );
    
}

const mapStateToProps= state => {
  console.log(state);
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

export default connect (mapStateToProps) (CoffeeDetailPage);