import React from 'react';
import {connect} from 'react-redux';
import Categorys from './Categoris';

const mapStateToProps= state => {
    return {
      user:state.loginReducer.user
    };
  }
  
class Home extends React.Component {
    constructor(props){
        super(props);
    }   
    
   

    render() {
        
        return(
            <div className="grid-main" id="home">
            <Categorys/>
        </div>
        );
    }
}
  
export default connect (mapStateToProps) (Home);