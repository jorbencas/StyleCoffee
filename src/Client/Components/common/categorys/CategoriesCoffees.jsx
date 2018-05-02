import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import { loadlistCoffees } from '../../../actions';

const CategorysCoffee = ({loadlistCoffees}) => {

        return (
          <div>
                <ul id="list">
                    <li className="item"><Link className="coffee" to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Capuchino</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Bombón</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Descafeinado</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cortado</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Café solo</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cafe con leche</Link></li>
                    <li className="itemn coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Expreso Doble</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Café Jamaicano</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Làgrima</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Instantaneo</Link></li>
                </ul> 
                
          </div>
        );
}

const mapStateToProps= state => {
    return {
      user:state.loginReducer.user
    };
  }

const mapDispatchToProps = dispatch=>{
  return{
        loadlistCoffees(param){
        dispatch(loadlistCoffees(param));
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(CategorysCoffee);