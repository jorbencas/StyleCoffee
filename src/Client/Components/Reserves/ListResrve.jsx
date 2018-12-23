import React from 'react';
import { listreserves, removereserve } from '../../actions/index';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'  
import { Link } from "react-router";

const mapStateToProps = state => {
  console.log(state.ReserveReducers.reserves);
    return {
      reserves:state.ReserveReducers.reserves
    };
  }
    
  const mapDispatchToProps = dispatch =>{
     return bindActionCreators({removereserve}, dispatch);
  } 

const  ListReserve = ({ reserves, removereserve}) => {

    function render(){
        const reserves = reserves.map( item => {
            <section className="itembook">
            <article className="bookfoto">
              <div className="state"><p>{item.state}</p></div>
              <img src={item.image} width="140px" height="215px" alt="./assets/photos/libro.png"/>
            </article>
            <article className="bookinfo">
              <p>{item.datestart}</p>
              <p>{item.dateend}</p>
            </article>
            <Link to='/listreserve' className="btn-search" onClick={()=>{removereserve(item)}}>Eliminar</Link>
          </section> 
        })

    }
    console.log(reserves);
    
        return(
            <div className="grid-main">
                { reserves == undefined ?'No hay reservas':render()}
            </div>
        );
    
}
export default connect (mapStateToProps,mapDispatchToProps)(ListReserve);